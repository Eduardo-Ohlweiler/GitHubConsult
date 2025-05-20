import React from "react";

import { MdGroup, MdLocationCity, MdWork } from "react-icons/md";
import { Container, Header, Avatar,Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/136762851?v=4" />
        <Login>
          Eduardo-Ohlweiler        
        </Login>
        <Name>          
          Eduardo Ohlweiler
        </Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30 seguidores - 10 seguindo
        </Data>
        <Data>
          <MdWork size={20} />
          Greenapp
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Venâncio Aires
        </Data>
      </Inner>    
    </Container>
  );
}


export default Profile;