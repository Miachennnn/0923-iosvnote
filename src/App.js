import { BrowserRouter as Router } from "react-router-dom";
import FolderList from "./component/folderList";
import Note from "./component/note";
import FolderContextProvider from "./context/folderContext";

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
