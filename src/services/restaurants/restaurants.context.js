import React, { useState, useContext, createContext, useEffect } from "react";
import { LocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

// this component make the request, transform and state of the request. 
// it will provide an error or if its loading and the actual output. 
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  // i used loc as a short form of location to avoid issues. 
  const retrieveRestaurants = (loc) => {
    setIsLoading(true); 

    // this will trigger our render cycle to the front of the screen or loader
    setRestaurants([]);
    setTimeout(() => {
      //
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        // always setLoading to false incase we get errors back 
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  //use Effect is saying run retrieve restaurants when it mounts. 
  useEffect(() => {
    if(location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};