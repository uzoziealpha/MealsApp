import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, TouchableOpacity} from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourties-bar.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";



const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
   margin-left: -25px;
`;
 
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [ isToggled, setisToggled ] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
             size={50}
             animating={true}
             color={Colors.purple}
          />
        </LoadingContainer>
      )}
        <Search 
           isFavouritesToggle={isToggled} 
           onFavouritesToggle={() => setisToggled(!isToggled)} 
        />
        {isToggled && 
          <FavouritesBar/>
        }
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
         return (
          <TouchableOpacity 
              onPress={() => navigation.navigate("RestaurantDetail", {
                  restaurant: item,
              })
            }
          > 
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>  
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};