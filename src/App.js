import { BrowserRouter as Router } from "react-router-dom";
import FolderContextProvider from "./context/folderContext";
import Note from "./component/note";
import FolderList from "./component/folderList";

function App() {
  return (
    <div className="App">
      <FolderContextProvider>
        <Router>
          <FolderList />
          <Note />
        </Router>
      </FolderContextProvider>
    </div>
  );
}

export default App;
