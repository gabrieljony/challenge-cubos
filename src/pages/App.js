import React, { Component, Fragment } from 'react';
import { Search } from '../components';
import CardList from '../components/CardList';

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { getGenre } from "../redux/actions";

class App extends Component {
    
    componentDidMount() {
        this.props.getGenre();
    }
    render() {
        return (
            <Fragment>
                <Search />
                <CardList />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getGenre }, dispatch);

export default connect( null, mapDispatchToProps )(App);



