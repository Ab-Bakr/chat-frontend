import "./App.css";
import { Auth, Chat } from "./pages/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      {user ? <Chat /> : <Auth />}
      {/* <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to={<Chat />} /> : <Navigate to={<Auth />} />
          }
        />
      </Routes> */}
      {/* <Home/> */}
      {/*<Profile/>*/}
      {/* <Auth/> */}
      {/* <Chat /> */}
    </div>
  );
}

export default App;
