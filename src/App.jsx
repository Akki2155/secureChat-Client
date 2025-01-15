import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

//Pages
import Login from "./pages/Login/Login";

//Components
import Modal from "./components/Modal/modal";
import PrivateRoute from "./components/Private/PrivateRoutes";
import Chats from "./pages/Chats/Chats";
import Loader from "./components/Loader/Loader";
import AddChat from "./components/Modal/AddChatModal/AddChat";

const App = () => {
  const isModalActive = useSelector(
    (state) => state.modalReducer.isModalActive
  );
  const isLoading = useSelector((state) => state.loaderReducer.isLoading);
  const isChatModalActive= useSelector((state) => state.modalReducer.isNewChatModalActive);
  

  return (
    <Router>
      <div className="app-container">
        {isLoading && <Loader />}
        {isModalActive && <Modal />}
        {isChatModalActive && <AddChat/>}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/chats"
            exact
            element={
              <PrivateRoute>
                <Chats/>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
