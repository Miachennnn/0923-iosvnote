import React, { useContext, useState, useEffect } from "react";
import { Redirect, useRouteMatch } from "react-router";
import { folderContext } from "../context/folderContext";
import { v4 } from "uuid";
import MyEditor from "./draft.js/myEditor";

const NoteDetail = () => {
  const { delString, defaultFolderName, folders, setFolders } =
    useContext(folderContext);
  const match = useRouteMatch("/:folder/:id");
  const matchFolder = useRouteMatch("/:folder");
  let btn;
  let nowFolder = matchFolder ? matchFolder.params.folder : defaultFolderName;
  btn = nowFolder === delString ? "svgBtnDisable" : "svgBtn";

  // const context = Object.entries(folders).map(folder => {
  //   match &&
  //     folder[1].map(
  //       (note, index) =>
  //         note.id === match.params.id
  //           ? console.log("fuck")
  //           : // <React.Fragment key={note.id}>
  //             //   <MyEditor index={index} note={note} folder={folder[0]} />
  //             // </React.Fragment>
  //             null
  //       // } else return null;
  //     );
  // });
  const context = Object.entries(folders).map(
    folder =>
      match &&
      folder[1].map((note, index) => {
        if (note.id === match.params.id) {
          return (
            <React.Fragment key={note.id}>
              <MyEditor index={index} note={note} folder={folder[0]} />
            </React.Fragment>
          );
        } else return null;
      })
  );
  const [redir, setRedir] = useState(false);
  const redirTo = () => {
    return <Redirect to={`/${nowFolder}/${redir}`} />;
  };
  useEffect(() => {
    if (redir) setRedir(false);
  }, [redir]);
  const addNote = () => {
    const newNote = {
      title: "新增備忘錄",
      context: "",
      createTime: Date.now(),
      id: v4(),
      blocks: {},
    };
    //若資料夾存在 新增note
    if (folders.hasOwnProperty(nowFolder)) {
      setFolders({ ...folders, [nowFolder]: [...folders[nowFolder], newNote] });
      setRedir(newNote.id);
    }
  };
  if (redir) return redirTo();
  return (
    <div className="n-detail">
      <div className="nav">
        <span
          className={btn}
          onClick={() => (btn === "svgBtn" ? addNote() : false)}
        >
          <svg
            height="15pt"
            viewBox="0 -1 381.53417 381"
            width="15pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m370.589844 230.964844c-5.523438 0-10 4.476562-10 10v88.792968c-.019532 16.558594-13.4375 29.980469-30 30h-280.589844c-16.5625-.019531-29.980469-13.441406-30-30v-260.589843c.019531-16.5625 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.589843c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.789062c0-5.523438-4.476563-10.003906-10-10.003906zm0 0" />
            <path d="m156.367188 178.34375 146.011718-146.015625 47.089844 47.089844-146.011719 146.015625zm0 0" />
            <path d="m132.542969 249.257812 52.039062-14.414062-37.625-37.625zm0 0" />
            <path d="m362.488281 7.578125c-9.769531-9.746094-25.585937-9.746094-35.355469 0l-10.605468 10.605469 47.089844 47.089844 10.605468-10.605469c9.75-9.769531 9.75-25.585938 0-35.355469zm0 0" />
          </svg>
        </span>
      </div>
      <div className="con">{context}</div>
    </div>
  );
};

export default NoteDetail;
