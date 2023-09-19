import React, { useState } from "react";
import styled from "styled-components";
// import Hedder from "./Hedder";
import ContentHedder from "./ContentHedder";
import YouTube, { YouTubeProps } from "react-youtube";
import "../App.css";
import axios from "axios";
import { api } from "./keys";
import { useLocation } from "react-router-dom";

const Watchmovies = () => {
  const [valuse, setValuse] = useState();
  const [blur, setBlur] = useState();
  const location = useLocation();
  //console.log(location.state.name);

  // const id = location.state.name.id;

  const handleMovie = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}`)
      .then((valuse) => {
        // setYoutubekey(valuse.data.results[0].key);
        //console.log(valuse.data.results[0].key);
        if (valuse.data.results[0].key.length > 0) {
          setValuse(valuse.data.results[0].key);
        }
      });

    let clr = "blur(8px)";
    setBlur(clr);
  };

  const opts = {
    height: "40%",
    width: "75%",
    playerVars: {
      autoplay: 0,
    },
  };

  // console.log(youtubekey);
  return (
    <Wrapper>
      <ContentHedder />
      <Top>
        <RightConteiner style={{ filter: blur }}>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${location.state.name.backdrop_path}`}
            alt=""
          />
        </RightConteiner>

        <LeftContainer style={{ filter: blur }}>
          <Title>{location.state.name.title}</Title>
          <Time>
            {location.state.name.release_date} | 2h 11m |{" "}
            {location.state.name.original_language}
          </Time>
          <Discription>{location.state.name.overview}</Discription>
          <CastHedding>Starring :</CastHedding>
          <Discription>Pawan Kalyan,Sai Dharam Tej,Ketika Sharma</Discription>
        </LeftContainer>
      </Top>
      <Span style={{ filter: blur }}>
        <SpanLeft>
          <NetflixLogo
            src={require("../assets/Netflix_Symbol_PMS.png")}
            alt=""
          />
          <Watch>Watch all you want.</Watch>
        </SpanLeft>
        <SpanRight>
          <Button>JOIN NOW</Button>
        </SpanRight>
      </Span>

      <Bottom>
        <BotoomContainer>
          <MovieTitle style={{ filter: blur }}>
            Videos | {location.state.name.title}
          </MovieTitle>
          <VideoContainer style={{ filter: blur }}>
            <Video>
              <Thumbnail
                src={`https://image.tmdb.org/t/p/w500${location.state.name.poster_path}`}
                alt=""
              />
            </Video>
            <Play
              onClick={() => handleMovie(location.state.name.id)}
              src={require("../assets/play-button.png")}
              alt=""
              s
            />
          </VideoContainer>

          {valuse && <YouTube videoId={valuse} opts={opts} id="youtube" />}
          <MoviName style={{ filter: blur }}>
            Trailer : {location.state.name.title}
          </MoviName>
        </BotoomContainer>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #181818;
  z-index: -5;
  position: absolute;
`;

const Top = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 414px) {
    padding-top: 60px;
  }
`;
const RightConteiner = styled.div`
  position: relative;
  z-index: -2;
  width: 80%;
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  @media (min-width: 1080px) {
    right: 60px;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 414px) {
  }
`;

const Poster = styled.img`
  width: 100%;
  display: block;
`;

const LeftContainer = styled.div`
  padding-top: 250px;
  z-index: -1;
  height: 50%;
  left: 0;
  position: absolute;
  width: 80%;
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  background: linear-gradient(
    90deg,
    #181818 0,
    hsla(0, 0%, 9%, 0.987) 6.62%,
    hsla(0, 0%, 9%, 0.951) 39.1%,
    hsla(0, 0%, 9%, 0.896) 48.5%,
    hsla(0, 0%, 9%, 0.825) 55.8%,
    hsla(0, 0%, 9%, 0.741) 58.06%,
    hsla(0, 0%, 9%, -0.352) 71%,
    hsla(0, 0%, 9%, 0.55) 0,
    hsla(0, 0%, 9%, 0.45) 0%,
    hsla(0, 0%, 9%, 0.352) 0%,
    hsla(0, 0%, 9%, 0.259) 0%,
    hsla(0, 0%, 9%, 0.175) 0%,
    hsla(0, 0%, 9%, 0.104) 0%,
    hsla(0, 0%, 9%, 0.049) 0%,
    hsla(0, 0%, 9%, 0.013) 0%,
    hsla(0, 0%, 9%, 0) 0
  );
  @media (max-width: 414px) {
    background: none;
  }
`;
const Title = styled.h2`
  padding-top: 180px;
  margin-left: 13%;
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
  @media (max-width: 991px) {
    margin-top: -260px;
    margin-left: 5%;
  }
  @media (max-width: 414px) {
    margin-top: -180px;
    margin-bottom: -10px;
    margin-left: 10px;
  }
`;
const Time = styled.p`
  margin-left: 13%;
  color: #ffffff83;
  @media (max-width: 991px) {
    margin-left: 5%;
  }
  @media (max-width: 414px) {
    margin-bottom: -10px;
    margin-left: 10px;
  }
`;
const Discription = styled.p`
  margin-left: 13%;
  width: 50%;
  color: #ffffff;
  display: inline-block;
  @media (max-width: 991px) {
    margin-left: 5%;
  }
  @media (max-width: 414px) {
    margin-bottom: -10px;
    margin-left: 10px;
    width: 100%;
    line-height:18px;

  }
`;
const CastHedding = styled(Discription)`
  display: inline-block;
  color: #ffffff83;
  margin-right: 5px;
  @media (max-width: 991px) {
    margin-left: 5%;
  }
  @media (max-width: 414px) {
    margin-bottom: -20px;
    padding: 0;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

const Span = styled.div`
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  margin: 0 auto;
  margin-top: -50px;
  width: 80%;
  background-image: linear-gradient(90deg, #333 5%, #1f1f1f 95%);
  height: 70px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    width: 92%;
  }
  @media (max-width: 414px) {
    margin-top: 400px;
    height: 75px;
  }
`;
const SpanLeft = styled.div`
  margin-left: 35px;
  display: flex;
  @media (max-width: 414px) {
    margin-left: 5px;
    height: 75px;
    flex: none;
    margin-top: -8px;
  }
`;
const NetflixLogo = styled.img`
  display: block;
  width: 40px;
  margin: 0;
  @media (max-width: 414px) {
    width: 50px;
    height: 90px;
  }
`;

const Watch = styled.h3`
  display: inline-block;
  bottom: 100px;
  color: #ffffff;
  padding-bottom: 20px;
  @media (max-width: 414px) {
    padding: 0;
    margin-top: 30px;
    margin-right: 0;
  }
`;
const SpanRight = styled.div``;
const Button = styled.button`
  border-radius: 3px;
  width: 120px;
  background-color: red;
  color: white;
  border: 0px;
  margin: 15px 35px;
  height: 55%;
  @media (max-width: 414px) {
    margin-top: 15px;
    margin-left: 10px;
  }
`;

const Bottom = styled.div`
  margin-left: 40px;

  @media (min-width: 1080px) {
    margin-left: 10%;
  }
`;
const BotoomContainer = styled.div`
@media (max-width: 414px) {
  margin-top: 50px;
margin-left:-30px ;
  }
`;
const MovieTitle = styled.h2`
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  color: white;
  @media (max-width: 414px) {
  font-size: 18px;
  }
  
`;
const VideoContainer = styled.div`
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
`;
const Video = styled.div`
  width: 30%;
  height: 300px;
  @media (max-width: 414px) {
  width: 60%;
  height: 250px;
  }
`;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  @media (min-width: 1080px) {
    width: 60%;
  }
`;

const Play = styled.img`
  z-index: 15;
  bottom: 8%;
  left: 6%;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50px;
  display: block;
  width: 40px;
  height: 45px;
  padding-left: 5px;
  @media (min-width: 1080px) {
    left: 11%;
    bottom: 6%;
  }
  @media (max-width: 414px) {
  left: 5%;
  bottom: 7%;
  }
`;
const MoviName = styled.p`
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  color: white;
  font-size: 20px;

  @media (max-width: 414px) {
  font-size: 17px;
  }

`;

export default Watchmovies;
