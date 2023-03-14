import React from "react";
import videobg from "../../assets/videos/video.mp4";
const VideoBG = () => {
  return (
    <div className="relative">
      <div
        className="absolute  top-0 w-[100%] h-[100%] "
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      ></div>
      <video
        className=""
        src={videobg}
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "80%", objectFit: "cover" }}
      />
      <div
        className=" absolute top-0 w-[100%] h-[100%] flex flex-col justify-center "
        style={{ alignItems: "center" }}
      >
        <h1 className="text-xl md:text-3xl">
          <span style={{ fontFamily: "Press Start 2P" }}>
            This video acting like a bg
          </span>
        </h1>
      </div>
    </div>
  );
};

export default VideoBG;
