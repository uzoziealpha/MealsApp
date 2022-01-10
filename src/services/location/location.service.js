import camelize from "camelize";
import { locations } from "./location.mock";



export const locationRequest = (searchTerm) => {
   return new Promise((resolve, reject) => {
       const locationMock = location[searchTerm];
       if (!locationMock) {
         reject("not found");
       }
       resolve(locationMock);
   });
};


export const locationTransform = (result) => {
    //addiung camelize will make sure everythimg in the json format comes back.
  const formattedResponse = camelize(result);  
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};