import "./App.css";
import Hedder from "./component/Hedder";
import Login from "./component/Login";
import Main from "./component/Main";
import Sinup from "./component/Sinup";
import Watchmovies from "./component/Watchmovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/watchmovie/" element={<Watchmovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// {/* <Login />  */}
// {/* <Sinup/> */}
export default App;
