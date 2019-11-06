import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from '../theme';

export default class components extends Component {
  render() {
    return (
        <Container>
            <input type="text" placeholder="Busque um filme por nome, ano ou gênero..."/>
        </Container>
      );
    }
}

const Container = styled.div`
    input{
        width: 100%;
        height: 2em;
        border-radius: 2em;
        margin: 1em 0;
        border: none;
        outline: none;
        background-color: ${color.gray};
        color: ${color.black};
        font-size: 1.5em;
        /* padding-left: 1em;
        padding-right: 1em; */
        &::placeholder {
            color: ${color.black};
            opacity: 0.5;
            font-size: 0.8em;
            @media (max-width: 340px) {
                font-size: 0.5em;
            }
            @media (min-width: 341px) {
                font-size: 0.6em;
            }
        }
    }
`;
