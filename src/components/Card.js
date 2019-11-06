import React, { Component } from 'react';
import styled from 'styled-components';
import {color, font} from '../theme';
import Date from './Date';
import Fab from './Fab';
import Chip from './Chip';


export default class Card extends Component {
  render() {
    return (
    <Container>
        <Img src="http://google.com" title="title" />
        <Content>
            <Header>
                <Title>Title</Title>
            </Header>
            <Date />
            <Box>
                <Fab />
                <Sinopse>Sinopsesssss</Sinopse>
                <Chip />
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
`;

const Img = styled.img`
  width: 350px;
  background-color: ${color.primary};
  height: calc(${heightBox} +  ${heightHeader});
`;

const Content = styled.div`
  width: 100%;
  background-color: ${color.gray};
  height: calc(${heightBox} +  ${heightHeader});
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
`;

const Box = styled.div`
  padding: 2em;
`;

const Sinopse = styled.p`
  font-size: 1.2em;
  color: ${color.primary};
  font-family: ${font.lato};
`;
