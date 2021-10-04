import React, { useContext, useEffect, useState } from "react";
import { folderContext } from "../context/folderContext";
import { Link } from "react-router-dom";
const Folder = () => {
  let textInput = null;
  useEffect(() => {
    textInput.focus();
  });
  const {
    defaultFolderName,
    svgFolder,
    delString,
    folders,
    adding,
    setFolders,
    setAdding,
  } = useContext(folderContext);
  const hide = adding ? { display: "" } : { display: "none" };
  const [newfolder, setNewFolder] = useState("");

  // 新建資料夾
  const addFolder = () => {
    if (adding) {
      if (Object.keys(folders).indexOf(newfolder) === -1 && newfolder)
        setFolders({ ...folders, [newfolder.replace(/\//g, "")]: [] });
    }
    setAdding(false);
  };
  // 預設資料夾名稱
  useEffect(() => {
    let num = Object.keys(folders).length - 1;
    setNewFolder("New Folder " + num);
  }, [adding]);
  return (
    <React.Fragment>
      <ul>
        {/* 一般資料夾 */}
        {Object.keys(folders).map((folderName, key) =>
          folderName === delString ? (
            ""
          ) : (
            <li key={key}>
              <span
                className={
                  folderName === defaultFolderName ? "light" : "yellow"
                }
              >
                {svgFolder}
              </span>
              <Link to={`/${folderName}`}>{folderName}</Link>
            </li>
          )
        )}
        {/* 新增資料夾 */}
        <li style={hide}>
          <input
            type="text"
            ref={e => {
              textInput = e;
            }}
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
        {/* 垃圾桶 */}
        <li>
          <span className="light">{svgFolder}</span>
          <Link to={`/${delString}`}>{delString}</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Folder;
