import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Header, Search } from '../components';
import CardList from '../components/CardList';

export default function App() {
    return (
        <Fragment>
            <Header />
            <Container>
                <Search />
                <CardList />
            </Container>
        </Fragment>
    );
}

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 1em;
    padding-right: 1em;
    @media (max-width: 575px) {

    }
    @media (min-width: 576px) {

    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {
        margin-right: 15%;
        margin-left: 15%;
    }
    @media (min-width: 1200px) {
        margin-right: 15%;
        margin-left: 15%;
    }
`;

