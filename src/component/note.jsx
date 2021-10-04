import React, { useContext } from "react";
import NoteDetail from "./noteDetail";
import NoteList from "./noteList";
import styled from "styled-components";
import { folderContext } from "../context/folderContext";

const Ndiv = styled.div`
  background: ${props => (props.dark ? "rgba(47,52,55,255)" : "white")};
  a {
    color: ${props => (props.dark ? "rgba(237,237,238,255)" : "#000")};
  }
  .svgBtn {
    fill: ${props => (props.dark ? "white" : "black")};
  }
  .n-list {
    border-left: ${props =>
      props.dark ? "rgba(55,60,63,255) solid 1px" : "#ccc solid 1px;"};
    border-right: ${props =>
      props.dark ? "rgba(55,60,63,255) solid 1px" : "#ccc solid 1px;"};
  }
  .n-list ul li {
    border-bottom: ${props =>
      props.dark ? "rgba(55,60,63,255) solid 1px" : "1px #ccc solid"};
  }
  .list-svg {
    fill: ${props => (props.dark ? "white" : "")};
  }

  .DraftEditor-root {
    border-top: ${props =>
      props.dark ? "rgba(55,60,63,255) solid 1px" : "1px #ccc solid"};
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
  const { dark } = useContext(folderContext);
  return (
    <Ndiv className="n" dark={dark}>
      <NoteList />
      <NoteDetail />
    </Ndiv>
  );
};

export default Note;
