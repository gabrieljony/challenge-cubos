import React, { Component, Fragment } from 'react';
import { Search, Pagination } from '../components';
import { CardList } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getGenre } from '../redux/actions';

class App extends Component {

    componentDidMount() {
        this.props.getGenre();
    }
    render() {
        return (
            <Fragment>
                <Search />
                <CardList />
                <Pagination />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getGenre }, dispatch);

export default connect(null, mapDispatchToProps)(App);



