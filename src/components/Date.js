import React from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';

export default function Date() {
    return (
        <Title>25/10/2017</Title>
    );
}

const Title = styled.h1`
  color: ${color.gray2};
  font-family: ${font.lato};
  opacity: 0.5;
  font-size: 1.5em;
  position: relative;
  left: 140px;
  padding-top: 0.2em;
`;
