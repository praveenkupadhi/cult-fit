import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

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
    cursor: pointer;
  `;
  const H1Text = styled.h1`
    display: flex;
    flex-direction: column;
    font-size: 50px;
    position: relative;
    margin-top: 20px;
    font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
  `;
  const PText = styled.p`
    text-indent: 8px;
    display: inline;
    position: absolute;
    width: 100px;
    height: 50px;
    overflow: hidden;
    left: 16rem;
    top: 10%;
    & > :nth-child(1) {
      opacity: 1;
      top: -15%;
      animation-name: span1;
      animation-duration: 5s;
      animation-delay: 5s;
      animation-iteration-count: infinite;
    }
    & > :nth-child(2) {
      opacity: 0;
      top: -120%;
      animation-name: span2;
      animation-duration: 5s;
      animation-delay: 10s;
      animation-iteration-count: infinite;
    }
    & > :nth-child(3) {
      opacity: 0;
      top: 120%;
      animation-name: span3;
      animation-duration: 5s;
      animation-delay: 15s;
      animation-iteration-count: infinite;
    }
    @keyframes span1 {
      0% {
        opacity: 1;
        top: -15%;
      }
      50% {
        opacity: 0;
        top: 120%;
      }
      100% {
        opacity: 0;
        top: -120%;
      }
    }

    @keyframes span2 {
      0% {
        opacity: 0;
        top: -120%;
      }
      50% {
        opacity: 1;
        top: -15%;
      }
      100% {
        opacity: 0;
        top: 120%;
      }
    }
    @keyframes span3 {
      0% {
        opacity: 0;
        top: 120%;
      }
      50% {
        opacity: 0;
        top: -120%;
      }
      100% {
        opacity: 1;
        top: -15%;
      }
    }
  `;
  const Span = styled.span`
    animation: animation-1d3gycc 7.5s linear infinite 0s;
    color: #00abe9;
    opacity: 0;
    top: -120%;
    left: -10%;
    overflow: hidden;
    position: absolute;
  `;
  return (
    <div>
      <FirstDiv className=" flex width-1200">
        <TextDiv className="left">
          <H1Text>
            For the
            <PText>
              {" "}
              <Span> Love </Span>
              <Span> fun </Span>
              <Span> ease </Span>
            </PText>
          </H1Text>
          <H1Text>of fit</H1Text>
        </TextDiv>
        <VideoDiv>
          <Video width="100%" autoPlay loop ref={videoRef}>
            <source
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/w_800,q_auto:eco/vc_auto/video/vm/54f8ba74-0a19-42dc-aa64-ec19f0dee189.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </Video>
          <MuteBtn onClick={() => setMuted(!muted)}>
            <img
              width="30px"
              src={`https://static.cure.fit/assets/images/volume-${
                muted ? "off" : "up"
              }-outline.svg`}
              alt=""
            />
          </MuteBtn>
        </VideoDiv>
      </FirstDiv>
    </div>
  );
};
