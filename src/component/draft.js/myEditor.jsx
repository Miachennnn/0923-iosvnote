import React, { useContext, useState } from "react";
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createLinkifyPlugin from "@draft-js-plugins/linkify";
import "draft-js/dist/Draft.css";
import "@draft-js-plugins/linkify/lib/plugin.css";
import { folderContext } from "../../context/folderContext";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

const MyEditor = ({ notes, note, folder, index }) => {
  const linkifyPlugin = createLinkifyPlugin({
    component(props) {
      return (
        <a
          {...props}
          onClick={() => {
            window.open(props.href);
          }}
        >
          {props.children}
        </a>
      );
    },
  });
  const plugins = [linkifyPlugin];

  const { folders, setFolders, delString } = useContext(folderContext);
  const [editorState, setEditorState] = useState(() => {
    let blocks = Object.keys(note).length === 0 ? null : note;
    if (blocks !== null) {
      // 預設note資料進editor
      return EditorState.createWithContent(convertFromRaw(blocks));
    }
    return EditorState.createEmpty();
  });
  //加入一些input
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleChange = editorState => {
    //fix
    let contentState = editorState.getCurrentContent();
    let row = convertToRaw(contentState);
    const folderPosts = folders[folder].slice(0);
    folderPosts[index]["blocks"] = row;
    setFolders({
      ...folders,
      [folder]: folderPosts,
    });
    localStorage.setItem(
      "folders",
      JSON.stringify({
        ...folders,
        [folder]: folderPosts,
      })
    );
    setEditorState(editorState);
  };
  const list = [
    { label: "B", style: "BOLD" },
    { label: "I", style: "ITALIC" },
    { label: "底線", style: "UNDERLINE" },
    { label: "等寬", style: "CODE" },
    { label: "Mark", style: "MARK" },
    { label: "H1", style: "header-one" },
    { label: "H2", style: "header-two" },
    { label: "H3", style: "header-three" },
    { label: "H4", style: "header-four" },
    { label: "Blockquote", style: "blockquote" },
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
    { label: "Code Block", style: "code-block" },
  ];
  const styleMap = {
    //style自定義樣式
    CODE: {
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
    MARK: {
      backgroundColor: "gray",
      fontStyle: "italic",
      color: "white",
    },
  };
  const myBlockStyleFn = contentBlock => {
    const type = contentBlock.getType();
    //block自定義樣式
    if (type === "blockquote") {
      return "superFancyBlockquote";
    }
  };
  const BtnClick = (style, type) => {
    type === "styleBtn" ? setEditorState(RichUtils.toggleInlineStyle(editorState, style)) : setEditorState(RichUtils.toggleBlockType(editorState, style));
  };
  return (
    <div className="Editor">
      <div className="EditorBtn ">
        {list.map((btn, index) => (
          <button key={index} onMouseDown={() => (index > 4 ? BtnClick(btn.style, "blockBtn") : BtnClick(btn.style, "styleBtn"))} className="e-btn t-bold">
            {btn.label}
          </button>
        ))}
        <p style={{ textAlign: "center" }}>{format(notes.createTime, "yyyy年MM月dd日 p", { locale: zhTW })}</p>
      </div>
      <Editor
        readOnly={folder === delString && true}
        customStyleMap={styleMap} //style樣式
        editorState={editorState}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        blockStyleFn={myBlockStyleFn} //區塊樣式
        spellCheck={true} //拼字檢查
        plugins={plugins}
      />
    </div>
  );
};
export default MyEditor;
