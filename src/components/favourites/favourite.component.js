import React, { useContext} from "react";
import styled from "styled-components/native";
//to add hear icon
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";


//this is a component with an arrow function that = returns null;
//export const Favourite = () => null;

const FavouriteButton = styled(TouchableOpacity)`
   position: absolute;
   top: 25px;
   right: 25px;
   z-index: 9;
`;
//z-index to make the icon pop up at the top


export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites} = useContext(
        FavouritesContext
    );
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
    return (
        <FavouriteButton
            onPress={() => !isFavourite 
                 ? addToFavourites(restaurant)
                 : removeFromFavourites(restaurant)
                }
        >
          <AntDesign 
             name={ isFavourite ? "heart" : "hearto" }
             size={24}
             color={ isFavourite ? "red" : "white"}
          
          />
        </FavouriteButton>   
    );
}