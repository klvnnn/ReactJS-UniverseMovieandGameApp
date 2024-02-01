import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import NewGame from "./Pages/NewGame";
import NotFound from "./Pages/Notfound";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gamelist" element={<NewGame/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
