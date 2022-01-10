import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

//methods
export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("san francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword = "Antwerp") => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        console.log(searchKeyword);
        locationRequest(searchKeyword.toLowerCase)
        .then(locationTransform)
        .then((result) => {
           setIsLoading(false);
           setLocation(result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
        });
    };
   

    return (
    <LocationContext.Provider
    value={{   
       isLoading,
       error,
       location,
       search: onSearch,
       keyword,
    }}
    >{children}</LocationContext.Provider>
    );
};