import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";

const RenderCard = movie =>
    movie &&
    movie.map((info, index) => {
        return (
            <Link to={`/movie`} key={index}>
                <Card {...info} key={info.id} />
            </Link>
        );
    });

const CardList = props => {
    const Card = props.state.movies && props.state.movies.results;
    return RenderCard(Card) || <div />;
};

const mapStateToProps = state => ({
    state: state.movieReducer
});

export default connect(mapStateToProps, null)(CardList);
