import React from "react";
import { Container, Main, Sidebar } from "./styles";
import Profile from "../../components/Profile";

function RepositoriesPage() {
    
    return (
        <Container>
            <Sidebar>
                <Profile />
            </Sidebar>
            <Main>
                main
            </Main>
        </Container>
    )
}

export default RepositoriesPage;