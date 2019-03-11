import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <Container elevation={1}>
      <Input placeholder="시 제목 혹은 글감 및 내용" />
      <Icon aria-label="Search">
        <SearchIcon />
      </Icon>
    </Container>
  );
}

const Container = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  max-width: 80%;
  border-radius: 30px !important;
`;

const Input = styled(InputBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fontFamily};
`;

const Icon = styled(IconButton)`
  padding: 10px;
`;

export default Search;
