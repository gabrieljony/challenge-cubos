import React, { Component } from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovie } from "../redux/actions";

import Date from '../components/Date';
import Fab from '../components/Fab';
import Chip from '../components/Chip';

class Movie extends Component {

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return (
      <Full>
          <Header>
              <Title>Title</Title>
              <Date/>
          </Header>
          <Content>
            <Detail>
              <SubTitle>
                  Sinopse
              </SubTitle>
              <Descriptions>Lorem import</Descriptions>
              <SubTitle>
                  Informações
              </SubTitle>
              <BoxContainer>
                <Box>
                  <Item>Situação</Item>
                  <SubItem>situação</SubItem>
                </Box>
                <Box>
                  <Item>Idioma</Item>
                  <SubItem>situação</SubItem>
                </Box>
                <Box>
                  <Item>Duração</Item>
                  <SubItem>situação</SubItem>
                </Box>
                <Box>
                  <Item>Orçamento</Item>
                  <SubItem>situação</SubItem>
                </Box>
                <Box>
                  <Item>Receita</Item>
                  <SubItem>situação</SubItem>
                </Box>
                <Box>
                  <Item>Lucro</Item>
                  <SubItem>situação</SubItem>
                </Box>
              </BoxContainer>
              <div>
                <Chip/>
              </div>
              <Fab/>
            </Detail>
              <Img src="http://google.com"/>
          </Content>
          <Img src="http://google.com"/>
      </Full>
    );
  }
}

const mapStateToProps = state => ({ state: state.movieReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ getMovie }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )(Movie);

export const Full = styled.section`
  font-family: ${font.abel};
`;

export const Header = styled.header`
  background-color: ${color.gray};
  width: 100%;
  height: 100px;
  padding: 0 40px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
   color: ${color.primary};
   font-size: 37px;
`;

export const Content = styled.article`
  display: flex;
`;

export const Detail = styled.div`
  background-color: ${color.gray3};
  width: calc(100% - 466.66px);
  height: 700px;
  padding: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 25px;
  color: ${color.primary};
  display: block;
  width: 100%;
  border-bottom: 2px solid ${color.secondary};
  padding-bottom: 10px;
`;

export const Descriptions = styled.p`
  color: ${color.gray2};
  margin: 20px 0 40px 0;
  font-size: 23px;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content:space-between;
`;

export const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
`;
export const Item = styled.div`
  color: ${color.primary};
  font-size: 19px;
`;

export const SubItem = styled.div`
  color: ${color.gray2};
  margin-top: 5px;
`;

export const Img = styled.img`
  height: 700px;
  float: left;
`;
