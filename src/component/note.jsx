import React from "react";
import NoteDetail from "./noteDetail";
import NoteList from "./noteList";

const Note = () => {
  return (
    <div className="n">
      <NoteList />
      <NoteDetail />
    </div>
  );
};

export default Note;
