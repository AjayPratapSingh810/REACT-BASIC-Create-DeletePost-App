import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostListProvider from './store/post-list-store';
import './App.css'
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
          <div className="content">
            <Header></Header>
            {selectedTab == "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App
