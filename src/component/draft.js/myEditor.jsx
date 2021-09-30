import React, { useContext, useEffect, useRef, useState } from "react";
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { folderContext } from "../../context/folderContext";

const MyEditor = ({ note, folder, index }) => {
  const { folders, setFolders } = useContext(folderContext);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  //加入一些input
  const handleKeyCommand = (command, editorState) => {
    console.log(command);
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };
  // 預設note資料進editor
  useEffect(() => {
    let blocks = Object.keys(note.blocks).length === 0 ? null : note.blocks;
    if (blocks !== null) {
      const contentState = convertFromRaw(blocks);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);
  const handleChange = editorState => {
    let contentState = editorState.getCurrentContent();
    let row = convertToRaw(contentState);
    const folderPosts = folders[folder].slice(0);
    folderPosts[index]["blocks"] = row;
    setFolders({
      ...folders,
      [folder]: folderPosts,
    });

    setEditorState(editorState);
  };
  const inputEl = useRef(null);
  const focus = () => {
    inputEl.current.focus();
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
    { label: "H5", style: "header-five" },
    { label: "H6", style: "header-six" },
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
      backgroundColor: "Yellow",
      fontStyle: "italic",
    },
  };
  const myBlockStyleFn = contentBlock => {
    const type = contentBlock.getType();
    //block自定義樣式
    if (type === "blockquote") {
      console.log(type);
      return "superFancyBlockquote";
    }
  };
  const styleBtnClick = style => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };
  const blockBtnClick = style => {
    setEditorState(RichUtils.toggleBlockType(editorState, style));
  };
  const EBtn = () => {
    return list.map((btn, index) => (
      <button
        key={index}
        onMouseDown={() =>
          index > 4 ? blockBtnClick(btn.style) : styleBtnClick(btn.style)
        }
        className="e-btn"
      >
        {btn.label}
      </button>
    ));
  };
  return (
    <div className="Editor" onClick={focus}>
      <div className="EditorBtn">
        <EBtn />
      </div>
      <Editor
        ref={inputEl}
        customStyleMap={styleMap} //style樣式
        editorState={editorState}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        blockStyleFn={myBlockStyleFn} //區塊樣式
        spellCheck={true} //拼字檢查
      />
    </div>
  );
};
export default MyEditor;
