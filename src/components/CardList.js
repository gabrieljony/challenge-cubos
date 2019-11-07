import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const RenderCard = movie =>
    movie &&
    movie.map(info => {
        console.log(info)
        return <Card {...info} key={info.id} />;
    });

const CardList = props => {
    const Card = props.state.movies && props.state.movies.results;
    return RenderCard(Card) || <div />;
};

const mapStateToProps = state => ({
    state: state.movieReducer
});

export default connect(mapStateToProps, null)(CardList);
