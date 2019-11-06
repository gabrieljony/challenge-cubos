import React from 'react';
import styled from 'styled-components';
import {color, font} from '../theme';

export default function Header() {
  return (
    <Container>
        <h1>Movies</h1>
    </Container>
  );
}

const Container = styled.header`
  background-color: ${color.primary};
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3em;
    color: ${color.secondary};
    font-family: ${font.abel};
  }
`;


