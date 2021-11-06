import React, { useState } from "react";
export const folderContext = React.createContext();

const FolderContextProvider = props => {
  const [dark, setDark] = useState(false);
  const [flist, setFlist] = useState(false);
  const defaultFolderName = "所有Note";
  const delString = "已刪除Note";
  //NOTE && Folders
  const defaultFolder = {
    [defaultFolderName]: [],
    [delString]: [
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
    update: [
      {
        createTime: 1636222191892,
        id: "b91fd89c-d0d8-496f-9f06-97ef939734bd",
        blocks: {
          blocks: [
            {
              key: "7nn22",
              text: "更新項目",
              type: "header-two",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "6hsrr",
              text: "[路由邏輯]：改成使用 useRouteMatch 做頁面重導向的判斷依據，Route & useParams 控制頁面元件顯示。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 6,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "cu08f",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "18vi7",
              text: "[Note列表時間顯示]：距離新增時間超過一天顯示日期，反之為時間。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 12,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "56vgc",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "f6n5i",
              text: "[Note選取樣式]：編輯中的 Note 在左側列表用黃底凸顯。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 10,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "195o6",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "95e0k",
              text: "[Folder列表顯示]：視窗調整時顯示列表按鈕。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 12,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "a9eae",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "1adn2",
              text: "[刪除 folder]：從原本右鍵刪除改成滑鼠滑過 Folder 時顯示刪除按鈕。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 11,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "4gecv",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "869rm",
              text: "[以最新新增時間排序]：最新新增的Note會顯示在最前面。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 11,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "7203q",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "3mls5",
              text: "[加入提示]：頁面操作提示。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 6,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "3mls5",
              text: "[禁止編輯]：禁止已經被刪除的 note 編輯。",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 6,
                  style: "BOLD",
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
  };
  const [folders, setFolders] = useState(() => {
    return localStorage.getItem("folders") === null ? defaultFolder : JSON.parse(localStorage.getItem("folders"));
  });
  const [adding, setAdding] = useState(false);
  return (
    <folderContext.Provider
      value={{
        delString,
        defaultFolderName,
        folders,
        setFolders,
        adding,
        setAdding,
        dark,
        setDark,
        flist,
        setFlist,
      }}
    >
      {props.children}
    </folderContext.Provider>
  );
};

export default FolderContextProvider;
