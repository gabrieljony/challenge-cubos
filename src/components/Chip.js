import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGenre } from '../redux/actions';

class Chip extends Component {
    componentDidMount() {
        this.props.getGenre();
      }

    renderTag = () => {
        const { genres } = this.props.state;
        if (genres) {
            return genres
            .filter((genre, index) => {
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

const mapStateToProps = state => ({ state: state.reducers });

const mapDispatchToProps = dispatch => bindActionCreators({ getGenre }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chip);

const Container = styled.div`
  background-color: ${color.white};
  border: 2px solid ${color.primary};
  border-radius: 20px;
  height: 30px;
  padding: 3px 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: ${color.primary};
  font-family: ${font.abel};
`;
