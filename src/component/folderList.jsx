import React, { useContext } from "react";
import { folderContext } from "../context/folderContext";
import AddFolder from "./addfolder";
import Folder from "./folder";
import ThemeToggle from "./themeToggle";
import styled from "styled-components";

const Flistdiv = styled.div`
  background: ${props => (props.dark ? "rgba(55,60,63,255)" : "white")};
  .btn,
  button,
  a {
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
  }
  input[type="text"] {
    background: ${props => (props.dark ? "rgba(47,52,55,255)" : "white")};
    border: none;
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
    padding: 3px;
  }
  span.light > .list-svg {
    fill: ${props => (props.dark ? "white" : "")};
  }
`;
const FolderList = () => {
  const { dark } = useContext(folderContext);

  return (
    <Flistdiv dark={dark} className="f-list">
      <ThemeToggle />
      <Folder />
      <AddFolder />
    </Flistdiv>
  );
};

export default FolderList;
