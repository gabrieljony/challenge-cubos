import React, { Fragment } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";

const RenderCard = (movie, props) => {
    console.log(props.state);
    if (props.state.requestSearchLoad) {
        return <Fragment />;
    }
    return (
        movie &&
        movie.map(info => {
            return (
                <Link to={`/movie/${info.id}`}>
                    <Card {...info} key={info.id} />
                </Link>
            );
        })
    );
};

const CardList = props => {
    const card = props.state.movies && props.state.movies.results;
    return <section>{RenderCard(card, props)}</section> || <Fragment />;
};

const mapStateToProps = state => ({
    state: state.movieReducer
});

export default connect(mapStateToProps, null)(CardList);
