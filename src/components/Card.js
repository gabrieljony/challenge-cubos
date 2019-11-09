import React, { Component } from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';
import { Date, Fab, Chip } from './';

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            mensage: "Sinopse não disponível."
        };
    }
    render() {
        const { release_date, popularity, title, poster_path, overview, genre_ids } = this.props;
        return (
            <Container>
                <Img src={`http://image.tmdb.org/t/p/w342///${poster_path}`} title={title} />
                <Content>
                    <Header>
                        <Fab value={popularity} position={true} />
                        <Title>{title}</Title>
                    </Header>
                    <Date value={release_date} float={true} />
                    <Box>
                        <Sinopse>{overview || this.state.mensage}</Sinopse>
                        <Chip genresIds={genre_ids} />
                    </Box>
                </Content>
            </Container>
        );
    }
    static defaultProps = {
        overview: "Sinopse não disponível."
    };
}
const heightHeader = "60px";
const heightBox = "370px";

const Container = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
  justify-content: flex-start;
  flex-grow: 1;
  @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Img = styled.img`
  width: 350px;
  background-color: ${color.primary};
  @media (max-width: 768px) {
    width: 100%;
    }
  @media (min-width: 769px) {
    height: calc((${heightBox} +  ${heightHeader}));
    }
`;

const Content = styled.div`
  width: 100%;
  background-color: ${color.gray};
  @media (max-width: 768px) {
    width: 100%;
    }
  @media (min-width: 769px) {
    height: calc((${heightBox} +  ${heightHeader}));
    }

`;

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: ${color.primary};
  width: 100%;
  height: ${heightHeader};
`;

const Title = styled.h1`
  color: ${color.secondary};
  font-family: ${font.abel};
  font-size: 2em;
  width: calc(100% - 2em);
  position: relative;
  left: 45px;
  padding-top: 0.5em;
  @media (max-width: 768px) {
    font-size: 1.2em;
    }
  @media (max-width: 575px) {
    font-size: 0.8em;
    }
`;

const Box = styled.div`
  padding: 4em 2em;
`;

const Sinopse = styled.p`
  font-size: 1.2em;
  color: ${color.gray2};
  font-family: ${font.lato};
`;
