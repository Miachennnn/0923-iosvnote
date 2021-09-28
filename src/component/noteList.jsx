import React, { useContext } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { folderContext } from "../context/folderContext";

const NoteList = () => {
  let match = useRouteMatch("/:folder");
  const { svgspan, folders, setFolders, defaultFolderName, delString } =
    useContext(folderContext);

  let filterFolder = match ? match.params.folder : defaultFolderName;
  const delNote = () => {
    console.log(folders);
  };
  const context = (
    <ul>
      {Object.entries(folders).map(key =>
        filterFolder !== defaultFolderName
          ? filterFolder === key[0] &&
            key[1].map(note => (
              <li key={note.id}>
                <Link to={`/${key[0]}/${note.id}`}>
                  <div className="t-bold">{note.title}</div>
                  <div>
                    <span style={{ marginRight: "10px" }}>
                      {new Date(note.createTime).toLocaleTimeString()}
                    </span>
                    <span className="darkgray">
                      {note.context === "" ? "沒有其他文字" : note.context}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          : key[0] !== delString &&
            key[1].map(note => (
              <li key={note.id}>
                <Link to={`/${defaultFolderName}/${note.id}`}>
                  <div className="t-bold">{note.title}</div>
                  <div>
                    <span style={{ marginRight: "10px" }}>
                      {new Date(note.createTime).toLocaleTimeString()}
                    </span>
                    <span className="darkgray">
                      {note.context === "" ? "沒有其他文字" : note.context}
                    </span>
                  </div>
                  <div className="gray t-small">
                    <span className="gray">{svgspan}</span>
                    {key[0]}
                  </div>
                </Link>
              </li>
            ))
      )}
    </ul>
  );
  return (
    <div className="n-list">
      <span className="svgBtn right" onClick={delNote}>
        <svg
          id="Layer_1"
          height="15pt"
          viewBox="0 0 512 512"
          width="15pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z" />
            <path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
            <path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
            <path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
          </g>
        </svg>
      </span>
      {context}
    </div>
  );
};

export default NoteList;
