import React from "react";
//style
import { SearchBarWrapper, SearchButton } from "./SearchBar.style";
import { Input } from "components/atoms/Input/Input";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Input />
      <SearchButton>Find it !</SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
