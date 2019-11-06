import React from 'react';
import styled from "styled-components";
import {color, font} from '../theme';

export default function Fab() {
  return (
    <Container>
        <Title>80%</Title>
    </Container>
  );
}

export const Container = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 4px solid ${color.secondary};
  background-color: ${color.tertiary};
`;

export const Title = styled.h1`
  color: ${color.secondary};
  font-family: ${font.abel};
  font-size: 25px;
`;