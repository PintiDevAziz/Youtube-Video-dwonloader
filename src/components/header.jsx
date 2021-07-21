import React, { useContext } from "react";
import { MainContext } from "../MainContext";

const Header = () => {
  const {
    setInputVal,
    inputVal,
    userUrl,
    danger,
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

  return (
    <div className="flex items-center justify-between h-12 w-[40rem] mb-4">
      {danger ? (
        <div className="dangerBox bg-gray-200/50 backdrop-blur-xl absolute top-0 left-1/2 rounded p-4 mt-4 border-2 border-gray-600 w-[40rem] -translate-x-1/2">
          <span className="italic bold">{inputVal}</span> this is not valid
          Youtube video url Please enter valid link
        </div>
      ) : null}
      <input
        type="text"
        value={inputVal}
        onChange={handleInput}
        placeholder="Enter Youtube Video Url"
        className={`w-full h-full border-gray-500 border-2 rounded ${
          danger ? "border-red-600" : null
        } focus:outline-none focus:border-indigo-700 transition-all text-center`}
      />
      <button
        onClick={handleSearch}
        className="border-2 h-full px-4 font-bold ml-3 rounded border-gray-500 hover:bg-indigo-500 transition-all hover:text-white hover:border-indigo-500 active:bg-indigo-700   "
      >
        Search
      </button>
    </div>
  );
};

export default Header;
