import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { color } from "../theme";

export default class Movie extends Component {
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
  color: ${color.black};
  font-size: 3em;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
`;
