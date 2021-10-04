import React, { useState } from "react";
import { v4 } from "uuid";
export const folderContext = React.createContext();

const FolderContextProvider = props => {
  // 顯示右鍵刪除menu
  const [display, setDisplay] = useState("none");
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
  const defaultFolder = {
    所有資料夾: [],
    "Recently Deleted": [
      {
        createTime: 1633374048999,
        id: "a8ed06be-48d0-4d0d-8ad3-a0236cf6f878",
        blocks: {
          blocks: [
            {
              key: "6p7d0",
              text: "對沒錯！",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 4,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "6t8q3",
              text: "這是個刪除測試",
              type: "header-one",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 7,
                  style: "UNDERLINE",
                },
                {
                  offset: 0,
                  length: 7,
                  style: "CODE",
                },
                {
                  offset: 0,
                  length: 7,
                  style: "MARK",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
      },
    ],
    使用說明: [
      {
        createTime: 1633373209163,
        id: "830a1d39-8cdf-4a17-8ea9-8747acaf70bd",
        blocks: {
          blocks: [
            {
              key: "8i43s",
              text: "第一行是Title",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "ff5h9",
              text: "第二行為可預覽的Context超過會顯示...",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "bjl3o",
              text: "可以新增/刪除資料夾",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "6tfka",
              text: "如何刪除？ 在想刪除的資料夾上點右鍵 *注意在此夾裡面的note會一併刪除",
              type: "blockquote",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 6,
                  style: "MARK",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "7dclq",
              text: "可以新增/刪除資料夾內的Note",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "7u5sf",
              text: "右上Toggle可以切換主題樣式(Light/Dark)",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "4kg07",
              text: "可以貼上Link 譬如 https://github.com/Miachennnn",
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
    待辦事項: [
      {
        createTime: 1633374102365,
        id: "a54f5466-b0ba-49bc-875c-79e6b6c15e45",
        blocks: {
          blocks: [
            {
              key: "3ts0e",
              text: "將來打算加入其他功能",
              type: "header-one",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "d2bvs",
              text: "修改folder名稱 / 修改note所屬的folder",
              type: "ordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "56h9f",
              text: "上傳圖片 嗎",
              type: "ordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "129na",
              text: "（先喘口氣 之後慢慢修",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 11,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
      },
    ],
    使用技術: [
      {
        createTime: 1633374197675,
        id: "cfc32235-3257-4cb4-ad87-c9b8b3eab066",
        blocks: {
          blocks: [
            {
              key: "1ggll",
              text: "首先是以\bIOS備忘錄來發想",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "crb2e",
              text: "Npx create-react-app指令來建立這個專案",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "bv10c",
              text: "React Hooks / React router",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "gead",
              text: "加入套件uuid產生獨立Id",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "cskg0",
              text: "以及DraftJS做編輯器",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "27l3b",
              text: "加入linkify來做偵測link",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "9brn0",
              text: "然後styled component來便利主題切換",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "6gso2",
              text: "最後加入local storage",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "86vg8",
              text: "大概 ... 以上。",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "e9p5h",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "2nsnn",
              text: "看到這邊有點想關掉拼字檢查...",
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
  };
  const [folders, setFolders] = useState(() => {
    return localStorage.getItem("folders") === null
      ? defaultFolder
      : JSON.parse(localStorage.getItem("folders"));
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
        display,
        setDisplay,
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
