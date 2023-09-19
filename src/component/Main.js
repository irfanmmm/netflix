import React, { useEffect, useState } from "react";

import styled from "styled-components";
import ContentHedder from "./ContentHedder";
import axios from "axios";
import { api } from "./keys";
import Watchmovies from "./Watchmovies";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [indian, setIndian] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [trending, setTrending] = useState([]);
  const [populer, setPopuler] = useState([]);

  const navigate = useNavigate();
  // const [youtubeid, setYutubeid] = useState();

  const handleMovie = (respons) => {
    //console.log("hellow")

    navigate("/watchmovie", { state: { name: respons } });
  };

  useEffect(() => {
    //youtube triler

    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}`)
      .then((respons) => {
        setIndian(respons.data.results);
      });
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}`)
      .then((respons) => {
        setDiscover(respons.data.results);
      });
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api}`)
      .then((respons) => {
        setTrending(respons.data.results);
      });
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}`)
      .then((respons) => {
        setPopuler(respons.data.results);
      });
  }, []);

  return (
    <Wrapper>
      <ContentHedder />
      <Body>
        <Hedding>Movies</Hedding>
        <Discription>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </Discription>
        <Section>
          <SectionHedding>Made in India</SectionHedding>
          <ListParent>
            {indian.map((respons) => {
              return (
                <List
                  key={respons.id}
                  onClick={() => {
                    handleMovie(respons);
                  }}
                >
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${respons.backdrop_path}`}
                    alt=""
                  />
                  <Title>{respons.title}</Title>
                </List>
              );
            })}
          </ListParent>
        </Section>
        <Section>
          <SectionHedding>Kids & Family Movies</SectionHedding>
          <ListParent>
            {discover.map((respons) => {
              //console.log(respons);
              return (
                <List key={respons.id} onClick={() => handleMovie(respons)}>
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${respons.backdrop_path}`}
                    alt=""
                  />
                  <Title>{respons.title}</Title>
                </List>
              );
            })}
          </ListParent>
        </Section>
        <Section>
          <SectionHedding>Horror Movies</SectionHedding>
          <ListParent>
            {trending.map((respons) => {
              //console.log(respons);
              return (
                <List key={respons.id} onClick={() => handleMovie(respons)}>
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${respons.backdrop_path}`}
                    alt=""
                  />

                  <Title>{respons.title}</Title>
                </List>
              );
            })}
          </ListParent>
        </Section>
        <Section>
          <SectionHedding>Bollywood Movies</SectionHedding>
          <ListParent>
            {populer.map((respons) => {
              // console.log(respons);
              return (
                <List key={respons.id} onClick={() => handleMovie(respons)}>
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${respons.backdrop_path}`}
                    alt=""
                  />
                  <Title>{respons.title}</Title>
                </List>
              );
            })}
          </ListParent>
        </Section>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Body = styled.div`
  padding: 150px 40px;
  background-color: #111111f6;
  min-height: 100vh;
  @media (min-width: 1080px) {
    padding-left: 3.5%;
  }
  @media (max-width: 414px) {
    padding-left: 2%;
  }
`;
const Hedding = styled.h1`
  font-size: 55px;
  margin: 0%;
  color: white;
  @media (max-width: 414px) {
    margin-top: -80px;
    font-size: 40px;
  }
`;
const Discription = styled.h4`
  width: 35%;
  font-weight: 500;
  color: white;
  font-size: 20px;
  margin-bottom: 40px;
  @media (max-width: 414px) {
    margin-top: 3px;
    width: 100%;
    font-size: 17px;
  }
`;
const Section = styled.div``;
const SectionHedding = styled.h4`
  margin-bottom: 10px;
  color: white;
  @media (max-width: 414px) {
    margin-top: -20px;
    padding-top: 0;
  }
`;
const ListParent = styled.ul`
  overflow-x: scroll;
  overflow-y: none;
  padding: 0;
  margin: 0;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 414px) {
    margin-bottom: 15px;
    overflow: auto;
    margin-right: -28px;
  }
`;
const List = styled.li`
  margin-right: 10px;
  @media (max-width: 414px) {
    width: 150px;
  }
`;
const Poster = styled.img`
  display: block;
  width: 300px;
  @media (max-width: 414px) {
    width: 150px;
  }
`;
const Title = styled.h4`
  text-align: center;
  color: white;
  @media (max-width: 414px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

export default Main;
