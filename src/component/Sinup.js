import React from "react";
import Hedder from "./Hedder";
import styled from "styled-components";
import baground from "../assets/baground.jpg";

const Sinup = () => {
  return (
    <>
      <Hedder />
      <Wrapper>
        <Container>
          <Hedding>Sign Up</Hedding>
          <Form action="">
            <Input type="email" placeholder="Email or phone number" />
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Password" />
          </Form>
          <Submit>Sign In</Submit>
          <Small>
            <Check type="checkbox" />
            <Cover>
              <Checklabel>Remember me</Checklabel>
              <Help>Need help?</Help>
            </Cover>
          </Small>
          <Botom>
            <Newto>New to Netflix?</Newto>
            <Subhedding>Sign up now</Subhedding>
            <Paragraph>
              this page is prottected by Google reCAPTCHA to ensure you're not a
              bot.
            </Paragraph>
          </Botom>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-image: url("${baground}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 50px 60px;
  border-radius: 3px;
  width: 340px;
  height: 550px;
  background-color: #000000cc;
`;

const Hedding = styled.h1`
  font-weight: 600;
  color: white;
`;
const Form = styled.form``;

const Input = styled.input`
  width: 93%;
  height: 40px;
  border-radius: 5px;
  /* background-color: gray; */
  padding-left: 20px;
  margin-bottom: 20px;
  background-color: #494242;
  caret-color: #ffffff;
  &:focus {
    outline: 0px solid white;
    color: white;
  }
  &::placeholder {
    color: gray;
  }
`;
const Submit = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  height: 40px;
  background-color: red;
  border: 0px;
  color: white;
  font-size: 18px;
`;
const Small = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Cover = styled.div`
  display: flex;
`;
const Check = styled.input`
  margin-right: 5px;
`;
const Checklabel = styled.label`
  margin-right: 140px;
  color: #b8b8b8;
`;
const Help = styled.h3`
  color: #b8b8b8;
  font-size: 14px;
  margin: 0;
  font-weight: 600;
`;
const Botom = styled.div`
  margin-top: 50px;
`;
const Newto = styled.h4`
  font-weight: 400;
  display: inline-block;
  color: #b8b8b8;
`;
const Subhedding = styled.h4`
  padding-left: 5px;
  font-size: 18px;
  font-weight: 400;
  display: inline-block;
  color: #ffffff;
`;
const Paragraph = styled.p`
  color: #b8b8b8;
`;

export default Sinup;
