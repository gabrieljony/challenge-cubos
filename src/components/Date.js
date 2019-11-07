import React from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';

export default function Date() {
    return (
        <Title>20/11/2019</Title>
    );
}

const Title = styled.h1`
  color: ${color.primary};
  font-family: ${font.abel};
  font-size: 1.5em;
  position: relative;
  left: 140px;
  padding-top: 0.2em;
`;
