import React from "react";
//style
import { SearchBarWrapper, SearchButton, Input } from "./SearchBar.style";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Input />
      <SearchButton>Find it !</SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
