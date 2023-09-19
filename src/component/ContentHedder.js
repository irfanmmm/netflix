import React from "react";
import styled from "styled-components";
import Hedder from "./Hedder";

const ContentHedder = () => {
  return (
    <TopContainer>
      <Top>
        <TopLeft>
          <Hedder />
        </TopLeft>
        <TopRight>
          <Join>JOIN NOW</Join>
          <SinIn>SIGN IN</SinIn>
        </TopRight>
      </Top>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 80px;
  @media (max-width: 414px) {
    height: 60px;
  }
`;
const Top = styled.div`
  display: flex;
`;
const TopLeft = styled.div`
@media (max-width: 414px) {
   
    margin-left: -30px;
    margin-top: -3px;
    
  }
`;
const TopRight = styled.div`
  position: absolute;
  right: 0;
  height: 35px;
  margin: 20px 40px;
  @media (min-width: 1080px) {
    margin: 20px 60px;
  }
  @media (max-width: 414px) {
    top: -5px;
    margin: 20px 10px;
  }
`;
const Join = styled.button`
  border-radius: 3px;
  width: 120px;
  background-color: red;
  color: white;
  border: 0px;
  height: 100%;
  @media (max-width: 414px) {
    height: 80%;
    width: 80px;
  }
`;
const SinIn = styled.button`
  border-radius: 3px;
  margin-left: 10px;
  width: 90px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  height: 100%;
  @media (max-width: 414px) {
    height: 80%;
    width: 70px;
  }
`;
export default ContentHedder;
