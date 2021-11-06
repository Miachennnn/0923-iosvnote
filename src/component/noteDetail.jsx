import React, { useContext } from "react";
import { useParams } from "react-router";
import { folderContext } from "../context/folderContext";
import MyEditor from "./draft.js/myEditor";

const NoteDetail = () => {
  const { folders } = useContext(folderContext);
  const { noteID } = useParams();
  return (
    <React.Fragment>
      {Object.entries(folders).map(folder =>
        folder[1].map((note, index) => {
          if (note.id === noteID) {
            return (
              <React.Fragment key={note.id}>
                <MyEditor index={index} notes={note} note={note.blocks} folder={folder[0]} />
              </React.Fragment>
            );
          } else return null;
        })
      )}
    </React.Fragment>
    // <React.Fragment>

    // </React.Fragment>
  );
};

export default NoteDetail;
