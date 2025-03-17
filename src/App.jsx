import "./App.css";
import { Route, Routes } from "react-router";
import Main from "./components/Layouts/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
