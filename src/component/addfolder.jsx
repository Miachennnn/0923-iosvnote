import React, { useContext } from "react";
import { folderContext } from "../context/folderContext";

const AddFolder = () => {
  const { setAdding } = useContext(folderContext);
  return (
    <div className="addFolder btn">
      <button
        onClick={() => {
          setAdding(true);
        }}
      >
        + Add a new Folder
      </button>
    </div>
  );
};

export default AddFolder;
