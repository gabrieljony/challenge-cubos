import React from 'react';
import styled from 'styled-components';
import {color, font} from '../theme';

export default function Date() {
  return (
    <Container>
      <Title>20/11/2019</Title>
    </Container>
  );
}

const Container = styled.div`
  
`;

const Title = styled.h1`
  color: ${color.primary};
  font-family: ${font.abel};
  font-size: 1.5em;
`;