import React from 'react';
import Image from 'next/image';

import * as Styled from './styles';

import Logo from '../../components/Logo/index';
import Footer from '../../components/Footer/index';


const SignUp = () => {
  return <div className="signup">
      <Styled.Wrapper>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-aea82.appspot.com/o/twitter-sigunp.png?alt=media&token=5b857fa3-32c4-4b27-ad29-7cd0260636ed"
          alt="Twitter Banner" width={`${1200}`} height={`${855}`} />
        <Styled.RightCol>
          <Logo width={"45"} height={"58"} fill="rgb(29, 161, 242)"/>
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
