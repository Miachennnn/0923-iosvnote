import React, { useContext, useEffect, useState } from "react";
import NoteDetail from "./noteDetail";
import NoteList from "./noteList";
import styled from "styled-components";
import { folderContext } from "../context/folderContext";
import { Redirect, Route, useParams, useRouteMatch } from "react-router";
import { v4 } from "uuid";
import Icons from "../component/icons";
import ThemeToggle from "./themeToggle";

const Ndiv = styled.div`
  background: ${props => (props.dark ? "rgba(47,52,55,255)" : "white")};
  .n-list a {
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
  }
  .svgBtn {
    fill: ${props => (props.dark ? "white" : "black")};
  }
  .n-list {
    border-left: ${props => (props.dark ? "rgba(55,60,63,255) solid 1px" : "#ccc solid 1px;")};
    border-right: ${props => (props.dark ? "rgba(55,60,63,255) solid 1px" : "#ccc solid 1px;")};
  }
  .n-list ul li:not(:first-child) {
    border-top: ${props => (props.dark ? "rgba(55,60,63,255) solid 1px" : "1px #ccc solid")};
  }
  .list-svg {
    fill: ${props => (props.dark ? "white" : "")};
  }

  .DraftEditor-root {
    border-top: ${props => (props.dark ? "rgba(55,60,63,255) solid 1px" : "1px #ccc solid")};
  }
  button {
    background: ${props => (props.dark ? "rgba(237,237,238,1)" : "")};
    padding: 0px 5px;
  }
  .Editor {
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
  }
`;
const Note = () => {
  const { dark, delString, folders, setFolders, defaultFolderName } = useContext(folderContext);
  const { folder } = useParams();
  let btn = folder === delString ? "svgBtnDisable" : "svgBtn";
  const [redir, setRedir] = useState(false);
  const match = useRouteMatch("/:folder/:noteID");
  // 若資料夾內無筆記 提示不同
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (folders[folder]) setCount(folders[folder].length);
  }, [folders, folder]);

  useEffect(() => {
    if (redir !== "") setRedir(false);
  }, [redir]);

  const addNote = () => {
    const newNote = {
      createTime: Date.now(),
      id: v4(),
      blocks: {},
    };
    //若資料夾存在 新增note
    if (folders.hasOwnProperty(folder)) {
      setFolders({ ...folders, [folder]: [newNote, ...folders[folder]] });
      localStorage.setItem(
        "folders",
        JSON.stringify({
          ...folders,
          [folder]: [newNote, ...folders[folder]],
        })
      );
      setRedir(newNote.id);
    }
  };

  if (redir) {
    return <Redirect to={`/${folder}/${redir}`} />;
  }
  return (
    <Ndiv className="n" dark={dark}>
      <NoteList />
      <div className="n-detail">
        <div className="nav">
          <span className={btn} onClick={() => (btn === "svgBtn" ? addNote() : false)}>
            <Icons.IconAddNote />
          </span>
          <ThemeToggle />
        </div>
        {folder !== delString && match === null && <div className="msg">{`Tip:${count === 0 && folder !== defaultFolderName ? "請先新增一個note，再" : ""}選擇一個note來做筆記吧！`}</div>}
        <Route path="/:folder/:noteID">
          <NoteDetail />
        </Route>
      </div>
    </Ndiv>
  );
};

export default Note;
