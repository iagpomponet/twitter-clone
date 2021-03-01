import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const BigTitle = styled.h2`
  font-family: Chirp, Verdana, System;
  color: rgb(15, 20, 25);
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -1.2px;
  margin-top: 30px;
`;

export const SmallTitle = styled.h2`
  font-family: Chirp, Verdana, System;
  color: rgb(15, 20, 25);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1.2px;
  max-width: 468px;
  margin-bottom: 40px;
`;

export const LeftCol = styled.div`
  width: 50vw;
  display: flex;
  height: 100%;

  div {
    height: 100%;
    width: 100%;
  }
`


export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 20px;
`

export const SubscribeLink = styled.button`
  max-width:  314px;
  width: 100%;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border: 0;
  height: 50px;
  box-shadow: 0!important;
  outline: 0;
  background-color : rgb(29, 161, 242);
  transition: 0.4s;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    background-color : rgb(26, 147, 221);
  }
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  margin-top: 20px;

  max-width:  314px;
  width: 100%;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border : 1px solid rgb(29, 161, 242);

  transition: 0.4s;
  color: rgb(29, 161, 242);
  cursor: pointer;
  font-weight: 700;
  height: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;


  &:hover {
    background-color: rgba(29, 161, 242, 0.1)
  }
`;
