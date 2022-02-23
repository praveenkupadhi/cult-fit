import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import promoVideo from "../assets/promoVideo.mp4";

export const Home = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.muted = muted;
  }, [muted]);
  const FirstDiv = styled.div`
    height: 40em;
    margin-top: 10rem;
  `;
  const Video = styled.video`
    height: 450px;
    background-color: #a1b0c5;
    border-radius: 10px;
    overflow: hidden;
    margin: 30px 0px 0px;

    float: left;
  `;
  const TextDiv = styled.div`
    width: 50%;
  `;
  const VideoDiv = styled.div`
    width: 100%;
    position: relative;
  `;
  const MuteBtn = styled.div`
    position: absolute;
    top: 80%;
    right: 1%;
  `;
  return (
    <div>
      <FirstDiv className=" flex width-1200 border">
        <TextDiv className="left"></TextDiv>
        <VideoDiv>
          <Video width="100%" autoPlay loop ref={videoRef}>
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
          <MuteBtn className="border">
            <img
              width="30px"
              src="https://static.cure.fit/assets/images/volume-off-outline.svg"
              alt=""
            />
          </MuteBtn>
        </VideoDiv>
      </FirstDiv>
    </div>
  );
};
