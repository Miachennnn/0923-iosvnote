import React, { useState } from "react";
import { v4 } from "uuid";
export const folderContext = React.createContext();

const FolderContextProvider = props => {
  const [dark, setDark] = useState(false);
  const svgFolder = (
    <svg className="list-svg" width="12px" height="12px" viewBox="0 0 408 408">
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
        createTime: Date.now(),
        id: v4(),
        blocks: {
          blocks: [
            {
              key: "73fvr",
              text: "fuck test",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
      },
    ],
    Folder1: [
      {
        createTime: Date.now(),
        id: v4(),
        blocks: {
          blocks: [
            {
              key: "a2i67",
              text: "筆記服務請挑選任一操作載體來設計，例：桌面版、網頁版、Mobile APP",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "f0mvh",
              text: "我可以新增一個筆記，填寫文章內容",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "98lr1",
              text: "我可以將筆記打星號，以方便快速搜尋",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "6t43u",
              text: "我的筆記擁有日/夜間瀏覽模式",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "630bv",
              text: "若您挑選的是 deksop、網頁版筆記服務，在筆記列表上，至少要有兩種以上檢視筆記方式，例如卡片檢視、摘要檢視、純文字列表檢視等等",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "174s4",
              text: "我可以在筆記裡，將文字變成粗體、斜體、下底線等基本樣式，並且載入連結",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "81a3d",
              text: "我可以在筆記裡插入圖片、檔案",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
      },
    ],
    Folder2: [
      {
        createTime: Date.now(),
        id: v4(),
        blocks: {},
      },
      {
        createTime: Date.now(),
        id: v4(),
        blocks: {},
      },
      {
        createTime: Date.now(),
        id: v4(),
        blocks: {},
      },
    ],
    Folder3: [
      {
        createTime: Date.now(),
        id: v4(),
        blocks: {},
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
        svgFolder,
        delString,
        defaultFolderName,
        folders,
        setFolders,
        adding,
        setAdding,
        dark,
        setDark,
      }}
    >
      {props.children}
    </folderContext.Provider>
  );
};

export default FolderContextProvider;
