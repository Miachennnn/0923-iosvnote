import React, { useContext, useEffect, useRef, useState } from "react";
import { folderContext } from "../context/folderContext";
import { Link, Redirect } from "react-router-dom";
import Icons from "./icons";

const Folder = () => {
  const { defaultFolderName, delString, folders, adding, setFolders, setAdding } = useContext(folderContext);

  const hide = adding ? { display: "" } : { display: "none" };
  const [newfolder, setNewFolder] = useState("");

  const [redir, setRedir] = useState(false);

  // 刪除資料夾
  const handleRemoveFolder = folder => {
    const { [folder]: removeNotes, ...diffFolder } = folders;
    const newFolder = { ...diffFolder, [delString]: [...removeNotes, ...folders[delString]] };
    setFolders(newFolder);
    localStorage.setItem("folders", JSON.stringify(newFolder));
    setRedir(true);
  };
  // 新建資料夾
  const addFolder = () => {
    if (adding) {
      if (Object.keys(folders).indexOf(newfolder) === -1 && newfolder) {
        setFolders({ ...folders, [newfolder.replace(/\//g, "")]: [] });
        localStorage.setItem(
          "folders",
          JSON.stringify({
            ...folders,
            [newfolder.replace(/\//g, "")]: [],
          })
        );
      }
    }
    setAdding(false);
  };
  const folderNameInput = useRef();
  useEffect(() => {
    folderNameInput.current.focus();
    setNewFolder("新資料夾");
  }, [adding]);
  if (redir) {
    return <Redirect to="/" />;
  }
  return (
    <React.Fragment>
      <ul>
        {Object.keys(folders).map(
          (folderName, key) =>
            folderName !== delString && (
              <li key={key}>
                <span className={folderName === defaultFolderName ? "light" : "yellow"}>
                  <Icons.IconFolder className="list-svg" width="12px" height="12px" />
                </span>
                <Link to={`/${folderName}`}>{folderName}</Link>
                {folderName !== defaultFolderName && <Icons.IconDelNote onClick={() => handleRemoveFolder(folderName)} className="right yellow none" />}
              </li>
            )
        )}
        {/* 新增資料夾 */}
        <li style={hide}>
          <input
            type="text"
            ref={folderNameInput}
            onKeyUp={e => {
              if (e.key === "Enter") {
                addFolder();
              }
            }}
            onBlur={addFolder}
            value={newfolder}
            onChange={e => {
              setNewFolder(e.target.value);
            }}
          ></input>
        </li>
        <li>
          <span className="light">
            <Icons.IconFolder className="list-svg" width="12px" height="12px" />
          </span>
          <Link to={`/${delString}`}>{delString}</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Folder;
