import React, { useContext } from "react";
import { MainContext } from "../MainContext";
import { Helmet } from "react-helmet";
const Header = () => {
  const {
    setInputVal,
    inputVal,
    ytVideoData,
    danger,
    isDarkMode,
    setIsDarkMode,
    setDanger,
    setYtVideoData,
    setShow,
    setLoading,
  } = useContext(MainContext);

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  if (!inputVal) {
    setDanger(false);
    setLoading(false);
  }

  const handleSearch = (e) => {
    if (inputVal.includes("https://youtu.be/")) {
      setLoading(true);
      setDanger(false);
      if (inputVal) {
        setShow(false);
      }
      fetch(
        `https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3?video_id=${inputVal.replace(
          "https://youtu.be/",
          ""
        )}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "3a7500bf3fmshd20b0ffde286e45p12717djsn657e168f2e08",
            "x-rapidapi-host": "youtube-to-mp32.p.rapidapi.com",
          },
        }
      )
        .then((res) => res.json())
        .then((ytData) => {
          setYtVideoData(ytData);
          setShow(true);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (inputVal.includes("https://www.youtube.com/watch?v")) {
      setLoading(true);
      if (inputVal) {
        setShow(false);
      }
      setDanger(false);
      fetch(
        `https://youtube-to-mp32.p.rapidapi.com/yt_to_mp3?video_id=${inputVal.replace(
          "https://www.youtube.com/watch?v=",
          ""
        )}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "3a7500bf3fmshd20b0ffde286e45p12717djsn657e168f2e08",
            "x-rapidapi-host": "youtube-to-mp32.p.rapidapi.com",
          },
        }
      )
        .then((res) => res.json())
        .then((ytData) => {
          setYtVideoData(ytData);
          setShow(true);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setDanger(true);
    }
  };
  //Darkmode Handle

  const hadnleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex items-center justify-between h-12 lg:w-[40rem] w-[20rem] mb-4">
      <div className="darkModeToggle absolute top-4 right-4">
        <div
          className={`button-container w-16 h-[1.8rem] border-2 rounded-full relative cursor-pointer ${
            isDarkMode ? "border-gray-700 bg-indigo-200" : null
          }`}
          onClick={hadnleDarkMode}
        >
          <div
            className={`circle bg-gray-400  w-6 h-6 rounded-full top-1/2 absolute left-[1.5px] transition-all  -translate-y-1/2 ${
              isDarkMode ? "translate-x-[2.10rem] bg-indigo-500" : null
            }`}
          ></div>
        </div>
      </div>
      <Helmet>
        <title>Download {ytVideoData.Title || "Yt Video Downloader"}</title>
        <html className={isDarkMode ? "dark" : null}></html>
      </Helmet>
      {danger ? (
        <div className="dangerBox  bg-gray-200/50 backdrop-blur-xl absolute lg:top-0 bottom-0 left-1/2 rounded p-4 mt-4 border-2 border-gray-600 lg:w-[40rem] w-[20rem] -translate-x-1/2">
          <span className="italic bold">{inputVal}</span> this is not valid
          Youtube video url Please enter valid link
        </div>
      ) : null}
      <input
        type="text"
        value={inputVal}
        onChange={handleInput}
        placeholder="Enter Youtube Video Url"
        className={`w-full h-full border-gray-500 border-2 rounded dark:bg-transparent dark:text-white dark:border-[#eee] dark:focus:border-indigo-500 ${
          danger ? "border-red-600" : null
        } focus:outline-none focus:border-indigo-700 transition-all text-center`}
      />
      <button
        onClick={handleSearch}
        className="border-2 dark:text-white dark:border-[#eee] h-full px-4 font-bold ml-3 rounded border-gray-500 hover:bg-indigo-500 transition-all hover:text-white hover:border-indigo-500 active:bg-indigo-700   "
      >
        Search
      </button>
    </div>
  );
};

export default Header;
