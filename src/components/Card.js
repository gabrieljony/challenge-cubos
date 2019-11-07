import React, { Component } from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';
import Date from './Date';
import Fab from './Fab';
import Chip from './Chip';

export default class Card extends Component {
    render() {
        const { title, poster_path, overview, genre_ids } = this.props;
        return (
            <Container>
                <Img src={`http://image.tmdb.org/t/p/w342///${poster_path}`} title={title} />
                <Content>
                    <Header>
                        <Fab />
                        <Title>{title}</Title>
                    </Header>
                    <Date />
                    <Box>
                        <Sinopse>{overview}</Sinopse>
                        <Chip genresIds={genre_ids} />
                    </Box>
                </Content>
            </Container>
        );
    }
}
const heightHeader = "60px";
const heightBox = "370px";

const Container = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
  justify-content: flex-start;
  flex-grow: 1;
`;

const Img = styled.img`
  width: 350px;
  background-color: ${color.primary};
  height: calc(${heightBox} +  ${heightHeader});
  @media (max-width: 992px) {
        width: 240px;
        height: calc((${heightBox} +  ${heightHeader}) /1.5);
    }
`;

const Content = styled.div`
  width: 100%;
  background-color: ${color.gray};
  height: calc(${heightBox} +  ${heightHeader});
  @media (max-width: 992px) {
        height: calc((${heightBox} +  ${heightHeader}) /1.5);
    }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: ${color.tertiary};
  width: 100%;
  height: ${heightHeader};
`;

const Title = styled.h1`
  color: ${color.secondary};
  font-family: ${font.abel};
  font-size: 2em;
  width: 100%;
  width: calc(100% - 2em);
  position: relative;
  left: 52px;
  padding-top: 0.5em;
`;

const Box = styled.div`
  padding: 2em;
`;

const Sinopse = styled.p`
  font-size: 1.2em;
  color: ${color.primary};
  font-family: ${font.lato};
`;
