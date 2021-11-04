import React, { useContext, useEffect, useState } from "react";
import { folderContext } from "../context/folderContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./menu";

const MenuStyle = styled.div`
  display: ${props => props.display};
  cursor: pointer;
  position: absolute;
  background: #fff;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.5);
  font-size: small;
  padding: 2px 8px;
  &:hover {
    background: #eee;
  }
`;
const Folder = () => {
  const [temp, setTemp] = useState("");

  let textInput = null;
  useEffect(() => {
    textInput.focus();
  });
  const { display, setDisplay, defaultFolderName, svgFolder, delString, folders, adding, setFolders, setAdding } = useContext(folderContext);
  const hide = adding ? { display: "" } : { display: "none" };
  const [newfolder, setNewFolder] = useState("");
  const [position, setPosition] = useState({ top: "50px", left: "100px" });
  const handleMenu = (e, folder) => {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    setPosition({ top: y, left: x });
    setTemp(folder);
    setDisplay("");
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
  // 預設資料夾名稱
  useEffect(() => {
    setNewFolder("New Folder");
  }, [adding]);
  return (
    <React.Fragment>
      <MenuStyle
        className="menuStyle"
        top={position.top}
        left={position.left}
        display={display}
        onClick={() => {
          const newFolder = Object.assign(
            {},
            ...Object.entries(folders)
              .filter(([k]) => k !== temp)
              .map(([k, v]) => ({ [k]: v }))
          );
          setFolders(newFolder);
          localStorage.setItem("folders", JSON.stringify(newFolder));
          setDisplay("none");
        }}
      >
        <Menu />
      </MenuStyle>
      <ul>
        {/* 一般資料夾 */}
        {Object.keys(folders).map((folderName, key) =>
          folderName === delString ? (
            ""
          ) : (
            <li key={key} onContextMenu={e => (folderName === defaultFolderName ? "" : handleMenu(e, folderName))}>
              <span className={folderName === defaultFolderName ? "light" : "yellow"}>{svgFolder}</span>
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
            // onKeyUp={e => {
            //   if (e.key === "Enter") {
            //     addFolder();
            //   }
            // }}
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
