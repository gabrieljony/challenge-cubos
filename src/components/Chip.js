import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from '../theme';

export default class Chip extends Component {
    render() {
        return (
            <Container>
                <Title>genero</Title>
            </Container>
        );
    }
}

export const Container = styled.div`
  background-color: ${color.white};
  border: 1px solid ${color.tertiary};
  border-radius: 20px;
  height: 30px;
  padding: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: ${color.tertiary};
`;
