import React from "react";
import AddFolder from "./addfolder";
import Folder from "./folder";

const FolderList = () => {
  return (
    <div className="f-list">
      <Folder />
      <AddFolder />
    </div>
  );
};

export default FolderList;
