import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from '../theme';

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleSearch } from "../redux/actions";

class Search extends Component {
    render() {
        const { searchValue } = this.props.state;
        const { handleSearch } = this.props;
        return (
            <Container>
                <input
                    type="text"
                    placeholder="Busque um filme por nome, ano ou gênero..."
                    value={searchValue}
                    onChange={e => handleSearch(e)}
                />
            </Container>
        );
    }
}


// Redux
const mapDispatchToProps = dispatch => bindActionCreators({ handleSearch }, dispatch);

const mapStateToProps = state => ({ state: state.movieReducer });

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// Styles
const Container = styled.div`
    input{
        width: 97%;
        height: 2em;
        border-radius: 2em;
        margin: 1em 0;
        border: none;
        outline: none;
        background-color: ${color.gray};
        color: ${color.black};
        font-size: 1.5em;
        padding-left: 1.5%;
        padding-right: 1.5%;
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
