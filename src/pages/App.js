import React, { Fragment } from 'react';
import styled from 'styled-components';
import {Header, Search, Card} from '../components';

export default function App() {
    return (
        <Fragment>
            <Header/>
            <Container>
                <Search/>
                <Card />
                <Card />
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
        
    }
    @media (min-width: 1200px) {
        
    }
`;

