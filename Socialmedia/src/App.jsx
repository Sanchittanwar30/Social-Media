import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";

import Postlist from "./components/Postlist";
import { useState } from "react";

function App() {
  const [selTab, setselTab] = useState("Create Post");

  return (
    <div className="app-container">
      <Sidebar selTab={selTab} />

      <div className="Content">
        <Header />
        {selTab === "Home" ? <Postlist /> : <CreatePost />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
