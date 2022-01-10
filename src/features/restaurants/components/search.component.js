import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


export const Search = () => {
    //this will store the search and search function 
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setsearchKeyword] = useState(keyword);


  return (
   <SearchContainer>
        <Searchbar 
           placeholder="Search for a location"
           value={searchKeyword}
           onSubmitEditing={() => {
               search(searchKeyword);
           }}
           onChangeText={(text) => {
               if (!text.length) {
                   return;
               }
               setsearchKeyword(text);
           }}
        />
    </SearchContainer>
  );
};