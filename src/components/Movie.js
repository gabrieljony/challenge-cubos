import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovie } from "../redux/actions";
import { color } from '../theme';

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
        <Fragment>
          <Header>
            <Titlle>{title}</Titlle>
          </Header>
          <Container>
            <Details>
              <SubTitle>Sinopse</SubTitle>
              <Sinopse>{overview}</Sinopse>
              <SubTitle>Informações</SubTitle>
              <article>
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
              </article>
            </Details>
            <Img src={`http://image.tmdb.org/t/p/w500//${poster_path}`} />
          </Container>
        </Fragment>
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

const Header = styled.header`
  background-color: ${color.tertiary};
  width: 100%;
  height: 100px;
  padding: 0 40px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Titlle = styled.h2`
  color: ${color.primary};
  font-size: 37px;
`;

const Sinopse = styled.p`
  color: ${color.black};
  margin: 20px 0 40px 0;
  font-size: 23px;
`;

const SubTitle = styled.h2`
  font-size: 25px;
  color: ${color.primary};
  display: block;
  width: 100%;
  border-bottom: 2px solid ${color.secondary};
  padding-bottom: 10px;
`;

const Container = styled.article`
  display: flex;
`;

const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
`;

const SubBoxTitle = styled.h1`
    color: ${color.primary};
    font-size: 19px;
`;

const SubBox = styled.h2`
    color: ${color.black};
    margin-top: 5px;
`;

const Details = styled.div`
  background-color: ${color.gray};
  width: calc(100% - 466.66px);
  height: 700px;
  padding: 40px;
  position: relative;
  display: inline-block;
`;

const Img = styled.img`
  height: 700px;
  float: left;
`;
