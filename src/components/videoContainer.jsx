import React, { useContext } from "react";
import { MainContext } from "../MainContext";
import ContentLoader from "react-content-loader";
import Loader from "./Loader";
const VideoContainer = () => {
  const { ytVideoData, show, loading } = useContext(MainContext);
  return (
    <>
      {show ? (
        <div className="lg:w-[40rem] dark:border-[#eee] w-[20rem] border-2 rounded border-gray-500 p-6 flex items-center flex-col">
          <div className="w-full flex items-center border-b-2 border-gray-400 pb-4 flex-col lg:flex-row">
            <img
              src={ytVideoData.Video_Thumbnail}
              alt="This is video humbnail"
              className=" w-52 h-36 mb-4 lg:mb-0"
            />
            <ul className="m-auto dark:text-white">
              <li className="mb-2">
                <span className="font-bold text-lg italic">Video Title : </span>
                {ytVideoData.Title || "xxxxxxx"}
              </li>
              <li className="mb-2">
                <span className="font-bold text-lg italic">
                  File Size (mp3) :{" "}
                </span>
                {ytVideoData.Download_Size || "xxx mb"}
              </li>
              <li className="mb-2">
                <span className="font-bold text-lg italic">File Type :</span> Mp3
              </li>
              <li>
                <span className="font-bold text-lg italic">Quality :</span>  320(kbps) <span className="font-bold">High</span>
              </li>
            </ul>
          </div>
          <div className="donwload  w-full flex items-center justify-center mt-4">
            <a
              download={ytVideoData.Title}
              href={ytVideoData.Download_url}
              className="px-10 border-gray-600 dark:border-[#eee] dark:text-white rounded border-2 py-2 transition-colors hover:bg-indigo-500 hover:text-white hover:border-indigo-500 active:bg-indigo-800"
            >
              Download
            </a>
          </div>
        </div>
      ) : null}
      {loading ?
        <Loader/>
       : null}
    </>
  );
};

export default VideoContainer;
