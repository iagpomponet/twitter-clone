import React from 'react';
import Image from 'next/image';

import * as Styled from './styles';

import Logo from '../../components/Logo/index';
import Footer from '../../components/Footer/index';


const SignUp = () => {
  const screenWidth = window ? window.innerWidth : 0;
  const screenHeight = window ? window.innerHeight : 0;;

  return <div className="signup">
      <Styled.Wrapper>
        <div style={{
          width: "50vw"
        }}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-aea82.appspot.com/o/twitter-sigunp.png?alt=media&token=5b857fa3-32c4-4b27-ad29-7cd0260636ed"
          alt="Twitter Banner"  width={`${screenWidth / 2}`} height={`${screenHeight}`} />
        </div>
        <Styled.RightCol>
          <Logo width={"45"} height={"58"}/>
          <Styled.BigTitle>
            Acontecendo agora
          </Styled.BigTitle>
          <Styled.SmallTitle>
            Inscreva-se no Twitter hoje mesmo.
          </Styled.SmallTitle>
          <Styled.SubscribeLink>
            Inscrever-se
          </Styled.SubscribeLink>
          <Styled.LoginButton>
            Entrar
          </Styled.LoginButton>
        </Styled.RightCol>
        <Footer />
      </Styled.Wrapper>
  </div>;
}

export default SignUp;
