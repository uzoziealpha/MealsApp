import React from "react";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
//horizobtal nav
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";


const FavouritesWrapper = styled.View`
  padding: 10px;
`;


export const FavouritesBar = ({ favourites, onNavigate }) => (
// this scrollview will make the favourites render from left to right.     
  
       <FavouritesWrapper>
        <Spacer variant="left.large">
          <Text variant="caption">Favourites</Text>
        </Spacer>    

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favourites.map((restaurant) => {
                const key = restaurant.name.split("").join("");
                return (
                  <Spacer key={key} position="left" size="medium">
                  <TouchableOpacity 
                    onPress={() => 
                     onNavigate("RestaurantDetail", { 
                         restaurant,
                     })
                     }
                     >
                     <CompactRestaurantInfo restaurant={restaurant} />
                 </TouchableOpacity>
                  </Spacer>
                );
           })}
         </ScrollView>
       </FavouritesWrapper> 
);
