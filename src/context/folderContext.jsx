import React, { useState } from "react";
import { v4 } from "uuid";
export const folderContext = React.createContext();

const FolderContextProvider = props => {
  const svgspan = (
    <svg className="prefix" width="12px" height="12px" viewBox="0 0 408 408">
      <g>
        <g>
          <path
            d="M372,88.661H206.32l-33-39.24c-0.985-1.184-2.461-1.848-4-1.8H36c-19.956,0.198-36.023,16.443-36,36.4v240
     c-0.001,19.941,16.06,36.163,36,36.36h336c19.94-0.197,36.001-16.419,36-36.36v-199C408.001,105.08,391.94,88.859,372,88.661z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
  const defaultFolderName = "所有資料夾";
  const delString = "Recently Deleted";
  //NOTE && Folders
  const [folders, setFolders] = useState({
    [defaultFolderName]: [],
    [delString]: [
      {
        title: "title1",
        context: "notenotenote2 shit",
        createTime: Date.now(),
        id: v4(),
      },
    ],
    Folder1: [
      {
        title: "title2",
        context: "notenotenote1",
        createTime: Date.now(),
        id: v4(),
      },
    ],
    Folder2: [
      {
        title: "title3",
        context: "notenotenote2 shit",
        createTime: Date.now(),
        id: v4(),
      },
      {
        title: "title4",
        context: "notenotenote2shit22222",
        createTime: Date.now(),
        id: v4(),
      },
      {
        title: "title5",
        context: "test /opfkjdstestestestsetset",
        createTime: Date.now(),
        id: v4(),
      },
    ],
    Folder3: [
      {
        title: "title6",
        context: "notenotenote3 test test",
        createTime: Date.now(),
        id: v4(),
      },
    ],
  });
  //DEL 垃圾桶
  // const [DelNote, setDelNote] = useState({
  // Folder3: [],
  // Folder3: [
  //   { context: "notenotenote3 test test", createTime: Date.now(), id: v4() },
  // ],
  // });
  const [adding, setAdding] = useState(false);
  return (
    <folderContext.Provider
      value={{
        svgspan,
        delString,
        defaultFolderName,
        folders,
        setFolders,
        adding,
        setAdding,
      }}
    >
      {props.children}
    </folderContext.Provider>
  );
};

export default FolderContextProvider;
