import React, { useContext } from "react";
import { MainContext } from "../MainContext";
import ContentLoader from "react-content-loader";
const VideoContainer = () => {
  const { ytVideoData, show, loading } = useContext(MainContext);
  return (
    <>
      {show ? (
        <div className="w-[40rem] border-2 rounded border-gray-500 p-4 flex items-center flex-col">
          <div className="w-full flex items-center border-b-2 border-gray-400 pb-4">
            <img
              src={ytVideoData.Video_Thumbnail}
              alt="This is video humbnail"
              className=" w-52 h-36 bg-red-500"
            />
            <ul className="m-auto">
              <li className="mb-2">
                <span className="font-bold text-lg italic">Video Title : </span>
                {ytVideoData.Title || "xxxxxxx"}
              </li>
              <li>
                <span className="font-bold text-lg italic">
                  File Size (mp3) :{" "}
                </span>
                {ytVideoData.Download_Size || "xxx mb"}
              </li>
            </ul>
          </div>
          <div className="donwload  w-full flex items-center justify-center mt-4">
            <a
              download={ytVideoData.Title}
              href={ytVideoData.Download_url}
              className="px-10 border-gray-600 rounded border-2 py-2 transition-colors hover:bg-indigo-500 hover:text-white hover:border-indigo-500 active:bg-indigo-800"
            >
              Download
            </a>
          </div>
        </div>
      ) : null}
      {loading ? (
        <ContentLoader
          speed={2}
          width={700}
          height={300}
          viewBox="0 0 700 300"
          backgroundColor="#c0bfbf"
          foregroundColor="#e8e8e8"
        >
          <rect x="0" y="0" rx="0" ry="0" width="300" height="200" />
          <rect x="450" y="30" rx="0" ry="0" width="150" height="10" />
          <rect x="450" y="60" rx="0" ry="0" width="150" height="10" />
          <rect x="450" y="90" rx="0" ry="0" width="150" height="10" />
          <rect x="450" y="120" rx="0" ry="0" width="150" height="10" />
          <rect x="450" y="150" rx="0" ry="0" width="150" height="10" />
          <rect x="0" y="230" rx="0" ry="0" width="700" height="5" />
          <rect x="250" y="260" rx="0" ry="0" width="200" height="40" />
        </ContentLoader>
      ) : null}
    </>
  );
};

export default VideoContainer;
