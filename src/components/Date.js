import React from 'react';
import styled from 'styled-components';
import { color, font } from '../theme';
import PropTypes from 'prop-types';

const Date = ({ value, float }) => {
    // Recebe aa data no formato === release_date: "2021-10-28"
    const splitDate = value.split("-");
    // Formatar a data: "28/10/2021"
    const formatDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;

    return (
        <BoxDate float={float}>
            <TitleDate>{formatDate}</TitleDate>
        </BoxDate>
    );
}

Date.propTypes = {
    value: PropTypes.string.isRequired,
    float: PropTypes.bool
};

Date.defaultProps = {
    value: "0000-00-00",
    float: true
};

export default Date;

const BoxDate = styled.div`
    ${({ float }) =>
        float
            ? ` position: absolute;
            margin-left: 145px;
            padding-top: 0.2em; `
            : ``}
`;

const TitleDate = styled.h1`
  color: ${color.gray2};
  font-family: ${font.lato};
  opacity: 0.5;
  font-size: 1.5em;
`;
