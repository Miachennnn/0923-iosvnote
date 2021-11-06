import React, { useContext } from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import Note from "./component/note";
import FolderList from "./component/folderList";
import { folderContext } from "./context/folderContext";

function App() {
  const { defaultFolderName } = useContext(folderContext);
  const match = useRouteMatch("/:folder");
  if (match === null) {
    return <Redirect to={`/${defaultFolderName}`} />; //自動導向預設資料夾
  }
  return (
    <div className="App">
      <FolderList />
      <Route path="/:folder">
        <Note />
      </Route>
    </div>
  );
}

export default App;
