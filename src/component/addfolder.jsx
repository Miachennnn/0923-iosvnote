import React, { useContext } from "react";
import { folderContext } from "../context/folderContext";
import Icons from "./icons";
const AddFolder = () => {
  const { setAdding } = useContext(folderContext);
  return (
    <div className="addFolder btn">
      <button
        onClick={() => {
          setAdding(true);
        }}
      >
        <span className="light">
          <Icons.IconAddFolder width="15" height="15" />
        </span>{" "}
        新增檔案夾
      </button>
    </div>
  );
};

export default AddFolder;
