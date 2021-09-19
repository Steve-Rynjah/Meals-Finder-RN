import React, {useState, createContext, useEffect, useMemo, useContext} from 'react'

import {restaurantRequest, restaurantTransform} from './restaurant.service'
import {LocationContext} from '../location/location.context'

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext)

    const retrieveRestaurants = (loc) => {
        setIsLoading(true)
        setRestaurants([])

        setTimeout(()=>{
            restaurantRequest(loc)
            .then(restaurantTransform)
            .then((results)=>{
                setIsLoading(false)
                setRestaurants(results)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
        },1500)
    }

    useEffect(()=>{
        if(location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString)
        }
    },[location])

    return (
        <RestaurantContext.Provider value={{restaurants, isLoading, error}}>
            {children}
        </RestaurantContext.Provider>
    )
}