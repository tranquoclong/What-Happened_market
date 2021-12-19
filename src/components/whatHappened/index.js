import React from "react";
import video from "../../assets/Images/video.png";
import video_01 from "../../assets/Images/video-object-01.png";
import video_02 from "../../assets/Images/video-object-02.png";
import video_03 from "../../assets/Images/video-object-03.png";
import video_04 from "../../assets/Images/video-object-04.png";
import video_05 from "../../assets/Images/video-object-05.png";
import video_06 from "../../assets/Images/video-object-06.png";
import video_07 from "../../assets/Images/video-object-07.png";
import video_08 from "../../assets/Images/video-object-08.png";
import video_09 from "../../assets/Images/video-object-09.png";

const WhatHappened = () => {
  return (
    <div className="what-happened">
      <h1 className="what-happened_title">what happened</h1>
      <p className="what-happened_content">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first{" "}
      </p>
      <button className="what-happened_button">SEE MORE</button>
      <img className="what-happened_video-08" src={video_08} alt="" />
      <img className="what-happened_video-09" src={video_09} alt="" />
      <img className="what-happened_video-03" src={video_03} alt="" />
      <img className="what-happened_video-0" src={video} alt="" />
      <img className="what-happened_video-01" src={video_01} alt="" />
      <img className="what-happened_video-02" src={video_02} alt="" />
      <img className="what-happened_video-04" src={video_04} alt="" />
      <img className="what-happened_video-05" src={video_05} alt="" />
      <img className="what-happened_video-07" src={video_07} alt="" />
      <img className="what-happened_video-06" src={video_06} alt="" />
    </div>
  );
};

export default WhatHappened;
