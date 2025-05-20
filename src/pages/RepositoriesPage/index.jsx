import React from "react";
import { Container, Main, Sidebar } from "./styles";
import Profile from "../../components/Profile";
import Filter from "../../components/Filter";

function RepositoriesPage() {
    
    return (
        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>
            <Main>
                main
            </Main>
        </Container>
    )
}

export default RepositoriesPage;