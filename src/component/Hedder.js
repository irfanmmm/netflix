import React from "react";
import styled from "styled-components";
const Hedder = (props) => {
  return (
    <Wrapper>
      {props.styls}
      <Left>
        <Logo src={require("../assets/logo.svg").default} />
      </Left>
      <Right>
        {props.a}
        {props.b}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  background-color: transparent;
  display: flex;
  margin: 20px 40px;
  align-items: center;
  @media (min-width: 1080px) {
    margin: 20px 60px;
    
  }
  
`;
const Left = styled.div`
  width: 150px;
 
`;

const Right = styled.div``;

const Logo = styled.img`
  display: block;
  width: 100%;
  @media (max-width: 414px) {
    width: 60%;
  }
`;

export default Hedder;
