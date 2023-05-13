import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBoxContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    background-color: #a30b0b;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #7c0a0a;
  border-radius: 10px;
  padding: 8px;
  width: 1170px;
  margin: 20px auto 20px auto;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 16px;
  margin-left: 8px;
  flex: 1;
  color: white;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: white;
`;

const SearchButton = styled.button`
  background-color: white;
  color: #7c0a0a;
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
`;

export const SearchBoxWithIcon = () => {
    return (
        <SearchBoxContainer>
            <SearchBox>
                <SearchIcon />
                <SearchInput placeholder="Refine your search here..." />
                <SearchButton>Search</SearchButton>
            </SearchBox>
        </SearchBoxContainer>
    );
};

