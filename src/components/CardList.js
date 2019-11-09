import React, { Fragment } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font } from "../theme/variable";

const RenderCard = props => {
    if (props.state.requestSearch) {
        return <Fragment />;
    }
    if (!props.state.pagination) return;


    const movie = props.state.pagination.movies;

    if (!movie[props.state.pagination.paginationActual]) {
        return <Item>Filme não encontrado em nossa base. Tente novamente.</Item>;
    }

    return (movie[props.state.pagination.paginationActual].map((info, index) => {
        return (
            <Link to={`/movie/${info.id}`} key={index}>
                <Card {...info} key={info.id} />
            </Link>
        );
    })
    );
};

const CardList = props => {
    return <section>{RenderCard(props)}</section> || <Fragment />;
};

const mapStateToProps = state => ({
    state: state.reducers
});

export default connect(mapStateToProps, null)(CardList);

const Item = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  color: ${color.primary};
  font-family: ${font.abel};
`;
