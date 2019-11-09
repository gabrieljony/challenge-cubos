import React from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';
import PropTypes from 'prop-types';

const Fab = ({ value, position }) => {
    return (
        <Container position={position}>
            <Content >
                <Title>{Math.round(value)}%</Title>
            </Content>
        </Container>
    );
}

Fab.propTypes = {
    value: PropTypes.number.isRequired,
    position: PropTypes.bool
};

Fab.defaultProps = {
    value: 0,
    position: false
}

export default Fab;

const Container = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 120px;
    border: 4px solid ${color.primary};
    background-color: ${color.secondary};
    display: flex;
    justify-content: center;
    margin:2px;
    align-items: center;
    ${({ position }) =>
        position
            ? ` position: relative;
                left: 30px;
                top: 30px; `
            : ``}
`;

const Content = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 4px solid ${color.secondary};
  background-color: ${color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${color.secondary};
  font-family: ${font.abel};
  font-size: 2em;
`;
