import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import github from "../../assets/images/github.svg";

function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={github} alt="Github" />
      <Title>GitHub</Title>
      <Form>
        <Input  type="text" 
                placeholder="Usuário" 
                value={login}
                onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color="#FFF" />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;