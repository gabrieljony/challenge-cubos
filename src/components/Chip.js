import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { color } from '../theme';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { getApiGenres } from "../redux/actions";

class Chip extends Component {
    renderTag = () => {
        const { genres } = this.props.state;
        if (genres) {
            return genres.filter((genre, index) => {
                return genre.id === this.props.genresIds[index];
            }).map((item, index) => (
                <Container key={index} title={item.name}>
                    <Title>{item.name}</Title>
                </Container>
            ));
        }
    };
    render() {
        return this.renderTag() || <Fragment />;
    }
}

Chip.defaultProps = { genreIds: [] };
Chip.propTypes = { genresIds: PropTypes.array.isRequired };

const mapStateToProps = state => ({ state: state.movieReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ getApiGenres }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chip);

export const Container = styled.div`
  background-color: ${color.white};
  border: 1px solid ${color.tertiary};
  border-radius: 20px;
  height: 30px;
  padding: 3px;
  display: inline-flex;
  justify-content: center;
  align-genres: center;
  margin-right: 10px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: ${color.tertiary};
`;
