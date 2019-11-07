import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Search } from '../components';
import CardList from '../components/CardList';

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { getApiGenres } from "../redux/actions";

class App extends Component {
    componentDidMount() {
        this.props.getApiGenres();
    }
    render() {
        return (
            <Fragment>
                
                <Container>
                    <Search />
                    <CardList />
                </Container>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getApiGenres }, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(App);

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

