import React, { useContext, useEffect, useState } from "react";
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { folderContext } from "../../context/folderContext";

const MyEditor = ({ note, folder, index }) => {
  const { folders, setFolders } = useContext(folderContext);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // 預設note資料進editor
  useEffect(() => {
    let blocks = Object.keys(note.blocks).length === 0 ? null : note.blocks;
    if (blocks !== null) {
      const contentState = convertFromRaw(blocks);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);
  const handleChange = editorState => {
    let row = convertToRaw(editorState.getCurrentContent());
    const folderPosts = folders[folder].slice(0);
    folderPosts[index]["blocks"] = row;
    setFolders({
      ...folders,
      [folder]: folderPosts,
    });
    setEditorState(editorState);
  };
  return <Editor editorState={editorState} onChange={handleChange} />;
};

export default MyEditor;
