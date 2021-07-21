import React from "react";
import { MainContextProvider } from "./MainContext";
import Header from "./components/header";
import VideoContainer from "./components/videoContainer";
const App = () => {
  return (
    <MainContextProvider>
      <div className="App flex-col h-screen w-screen flex items-center justify-center dark:bg-[#333]">
        <Header />
        <VideoContainer />
      </div>
    </MainContextProvider>
  );
};

export default App;
