import React, { useContext, useEffect, useState } from "react";
import { Redirect, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { folderContext } from "../context/folderContext";
import Icons from "../component/icons";
import { format, addDays } from "date-fns";
import { zhTW } from "date-fns/locale";

const NoteList = () => {
  const { folders, setFolders, defaultFolderName, delString, flist, setFlist } = useContext(folderContext);
  const { folder } = useParams();
  const match = useRouteMatch("/:folder/:noteID");

  let noteID = match ? match.params.noteID : "";
  const [redir, setRedir] = useState(false);

  const delNote = () => {
    // 清空垃圾桶
    if (folder === delString) {
      setFolders({ ...folders, [delString]: [] });
      localStorage.setItem("folders", JSON.stringify({ ...folders, [delString]: [] }));
      return;
    }
    // 刪除符合router的Note
    if (noteID) {
      if (flatFolders.find(note => note.id === noteID)) {
        let filterFolder = folder === defaultFolderName ? flatFolders.find(note => note.id === noteID)["folder"] : folder;

        const { [filterFolder]: tempNotes } = folders;

        const removeNote = tempNotes.filter(key => key["id"] === noteID);
        const newNotes = tempNotes.filter(key => key["id"] !== noteID);
        const newFolders = { ...folders, [filterFolder]: newNotes, [delString]: [...removeNote, ...folders[delString]] };
        setFolders(newFolders);
        localStorage.setItem("folders", JSON.stringify(newFolders));
        // 自動選取上一個
        let noteIndex = {};
        let notes = folder === defaultFolderName ? flatFolders.filter(note => note.folder !== delString) : tempNotes;
        Object.entries(notes).map((key, index) => {
          if (key[1]["id"] === noteID) {
            noteIndex = index - 1 < 0 ? (notes[index + 1] ? notes[index + 1]["id"] : " ") : notes[index - 1]["id"];
          }
        });
        setRedir(noteIndex);
      }
    }
  };
  console.log(folders);
  //TODO console

  // 取得資料夾內筆記
  const getAllNotes = () => {
    return flatFolders.map(note => note.folder !== delString && getNote(note));
  };
  const getFilterNotes = () => {
    return flatFolders.map(note => note.folder === folder && getNote(note));
  };
  const getNote = note => {
    return (
      <li key={note.id} className={noteID === note.id ? "active" : ""}>
        <Link to={`/${folder}/${note.id}`}>
          <div className="noteListTitle .t-bold">{getLine(note.blocks, 0) ? getLine(note.blocks, 0) : "新增備忘錄"}</div>
          <div className="noteListTimePrev">
            {addDays(note.createTime, 1) > new Date().getTime() ? format(note.createTime, "p ", { locale: zhTW }) : format(note.createTime, "yyyy/MM/dd ")}
            {getLine(note.blocks, 1) ? getLine(note.blocks, 1) : "沒有其他文字"}
          </div>
          <div className="noteListFolder t-small">
            <span>
              <Icons.IconFolder className="list-svg" width="12px" height="12px" />
            </span>
            {note.folder}
          </div>
        </Link>
      </li>
    );
  };

  // 取行內容文字
  const getLine = (noteBlock, line) => {
    let blocks = Object.keys(noteBlock).length === 0 ? null : noteBlock;
    if (blocks !== null) {
      const findText = blocks.blocks.filter(item => item.text !== "");
      if (findText[line]) {
        return findText[line].text;
      }
    }
  };

  // 扁平化之後排序notes
  const flatFolders = Object.entries(folders)
    .map(key => key[1].map(note => ({ ...note, folder: key[0] })))
    .flat()
    .sort((a, b) => b.createTime - a.createTime);

  useEffect(() => {
    if (redir) setRedir(false);
  }, [redir]);

  if (redir) {
    return <Redirect to={`/${folder}/${redir}`} />; // 刪除note後重新導向 避免對已移入'刪除note'的資料做修改
  } else
    return (
      <div className="n-list">
        <span className="svgBtn menu">
          <Icons.IconMenu
            width="20"
            height="20"
            onClick={() => {
              setFlist(!flist);
            }}
          />
        </span>
        <span className="svgBtn right" onClick={delNote}>
          <Icons.IconDelNote />
        </span>
        {<ul>{folder === defaultFolderName ? getAllNotes() : getFilterNotes()}</ul>}
      </div>
    );
};

export default NoteList;
