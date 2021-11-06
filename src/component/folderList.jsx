import React, { useContext } from "react";
import { folderContext } from "../context/folderContext";
import AddFolder from "./addfolder";
import Folder from "./folder";
import styled from "styled-components";

const Flistdiv = styled.div`
  background: ${props => (props.dark ? "rgba(55,60,63,255)" : "white")};
  a {
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
  }
  button {
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
  }
  input[type="text"] {
    background: ${props => (props.dark ? "rgba(47,52,55,255)" : "white")};
    border: none;
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
    padding: 3px;
  }
  span.light {
    fill: ${props => (props.dark ? "white" : "")};
  }
  ${props => (props.show ? "& {display:block !important}" : "")}
`;

const FolderList = () => {
  const { dark, flist } = useContext(folderContext);

  return (
    <Flistdiv className="f-list" dark={dark} show={flist}>
      <Folder />
      <AddFolder />
    </Flistdiv>
  );
};

export default FolderList;
