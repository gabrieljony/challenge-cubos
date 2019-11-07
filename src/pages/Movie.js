import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { color } from "../theme";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovie } from "../redux/actions";

class Movie extends Component {

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return (
        <Fragment>
            <Full>
                <Header>
                    <Container>
                        <Title>Title</Title>
                    </Container>
                </Header>
            </Full>
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({ state: state.movieReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ getMovie }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )(Movie);

export const Full = styled.div`
  width: 100%;
  background-color: ${color.gray};
`;

export const Header = styled.header`
  background-color: ${color.black};
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${color.white};
  font-size: 3em;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
`;
