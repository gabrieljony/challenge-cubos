import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPagination } from "../redux/actions";

import styled from "styled-components";
import { color, font } from "../theme/variable";

class Pagination extends Component {
    setPage = page => {
        this.props.setPagination(page);
    };

    renderPages = () => {
        const { pagination, requestSearch } = this.props.state;
        if (requestSearch) {
            return;
        }
        if (pagination) {
            const { totalPag, paginationActual } = this.props.state.pagination;
            return totalPag.map(page => {
                return (
                    <Content onClick={() => this.setPage(page)} key={page}>
                        {page === paginationActual ? (
                            <Box>
                                <Item>
                                    <Active>{page}</Active>
                                </Item>
                            </Box>
                        ) : (
                                <Desactive>{page}</Desactive>
                            )}
                    </Content>
                );
            });
        }
    };

    render() {
        return <Container>{this.renderPages()}</Container>;
    }
}

const mapStateToProps = state => ({
    state: state.reducers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setPagination }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* maozinha */
    cursor: hand; // Pro IE
    cursor: pointer; // Pro FF
`;
export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${color.primary};
    height: 62px;
    width: 62px;
    margin: 0 10px;
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${color.primary};
    border: 3px solid ${color.secondary};
    height: 50px;
    width: 50px;
`;

export const Active = styled.h4`
  color: ${color.secondary};
  font-family: ${font.abel};
  font-size: 1.7em;
`;

export const Desactive = styled.h4`
    color: ${color.primary};
    font-family: ${font.abel};
    font-size: 1.2em;
    margin: 0 10px;
`;
