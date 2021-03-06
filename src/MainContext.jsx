import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [danger, setDanger] = useState(false);
  const [ytVideoData, setYtVideoData] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const data = {
    inputVal,
    danger,
    isDarkMode,
    setIsDarkMode,
    setDanger,
    show,
    setShow,
    setInputVal,
    ytVideoData,
    loading,
    setLoading,
    setYtVideoData,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
