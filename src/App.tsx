import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Preview from "./pages/Preview";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects/:id" Component={Editor} />
        <Route path="/preview/:id" Component={Preview} />
      </Routes>
    </>
  );
}

export default App;
