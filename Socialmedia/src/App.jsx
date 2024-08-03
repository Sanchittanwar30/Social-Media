import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";

import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/post-list";

function App() {
  const [selTab, setselTab] = useState("Create Post");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selTab={selTab} setselTab={setselTab} />

        <div className="Content">
          <Header />
          {selTab === "Home" ? <Postlist /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
