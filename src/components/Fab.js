import React from 'react';
import styled from "styled-components";
import { color, font } from '../theme';

export default function Fab() {
    return (
        <Container>
            <Title>80%</Title>
        </Container>
    );
}

const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 4px solid ${color.secondary};
  background-color: ${color.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 30px;
  top: 30px;
`;

const Title = styled.h1`
  color: ${color.secondary};
  font-family: ${font.abel};
  font-size: 25px;
`;
