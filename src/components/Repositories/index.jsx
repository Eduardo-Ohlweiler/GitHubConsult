import React from 'react';
import { Container } from './styles';
import Repository from '../Repository';

function Repositories() {
    return (
        <Container>
            <h1>Repositórios</h1>
            <Repository />
        </Container>
    )
}

export default Repositories;