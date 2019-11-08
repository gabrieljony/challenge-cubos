import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovie } from "../redux/actions";
import { color, font } from '../theme';
import { Date } from './';

class Movie extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }

    timeConvert = time => {
        var number = time;
        var hours = number / 60;
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return `${rhours} h ${rminutes}m`;
    };

    renderSingle = () => {
        if (this.props.state.movieDetails) {
            const {
                title,
                poster_path,
                overview,
                status,
                spoken_languages,
                runtime,
                budget,
                revenue
            } = this.props.state.movieDetails;

            const languages = spoken_languages.map(({ name }) => name).join(" ")
            const time = this.timeConvert(runtime);
            const orcamento = budget.toLocaleString("en-US");
            const receita = revenue.toLocaleString("en-US");
            const lucro = (revenue - budget).toLocaleString("en-US")

            return (
                <Container>
                    <Header>
                        <Titlle>{title}</Titlle>
                        <Date />
                    </Header>
                    <Content>
                        <Details>
                            <SubTitle>Sinopse</SubTitle>
                            <Sinopse>{overview}</Sinopse>
                            <SubTitle>Informações</SubTitle>
                            <Info>
                                <Box>
                                    <SubBoxTitle>Situação</SubBoxTitle>
                                    <SubBox>{status}</SubBox>
                                </Box>
                                <Box>
                                    <SubBoxTitle>Idioma</SubBoxTitle>
                                    <SubBox>
                                        {languages}
                                    </SubBox>
                                </Box>
                                <Box>
                                    <SubBoxTitle>Duração</SubBoxTitle>
                                    <SubBox>{time}</SubBox>
                                </Box>
                                <Box>
                                    <SubBoxTitle>Orçamento</SubBoxTitle>
                                    <SubBox>${orcamento}</SubBox>
                                </Box>
                                <Box>
                                    <SubBoxTitle>Receita</SubBoxTitle>
                                    <SubBox>${receita}</SubBox>
                                </Box>
                                <Box>
                                    <SubBoxTitle>Lucro</SubBoxTitle>
                                    <SubBox>
                                        ${lucro}
                                    </SubBox>
                                </Box>
                            </Info>
                        </Details>
                        <Img src={`http://image.tmdb.org/t/p/w500//${poster_path}`} />
                    </Content>
                </Container>
            );
        }
    };
    render() {
        return <Fragment>{this.renderSingle()}</Fragment>;
    }
}

const mapStateToProps = state => ({
    state: state.reducers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getMovie }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);

const Container = styled.div`
    font-family: ${font.abel};
    width: 100%;
    height: 700px;
`;

const Header = styled.header`
  background-color: ${color.gray};
  height: 100px;
  padding: 0 2em;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Titlle = styled.h2`
  color: ${color.primary};
  font-size: 2.5em;
`;

const Sinopse = styled.p`
    font-family: ${font.lato};
    color: ${color.gray2};
    padding: 1em 0 2em 0;
    font-size: 1.2em;
`;

const SubTitle = styled.h2`
  color: ${color.primary};
  font-size: 2em;
  width: 100%;
  border-bottom: 2px solid ${color.secondary};
  padding-bottom: 10px;
`;

const Box = styled.div`
  flex-direction: column;
  text-align: center;
`;

const SubBoxTitle = styled.h1`
    color: ${color.primary};
    font-size: 18px;
`;

const SubBox = styled.h2`
    font-family: ${font.lato};
    color: ${color.black};
`;

const Info = styled.article`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding: 1em 0 2em 0;
`;

const Content = styled.article`
    display:flex;
    flex-direction:row;
`;

const Details = styled.div`
    background-color: ${color.gray3};
    width: calc(100% - 450px);
    padding: 2.5em;
`;

const Img = styled.img`
    width: 400px;
    height: 600px;
`;
