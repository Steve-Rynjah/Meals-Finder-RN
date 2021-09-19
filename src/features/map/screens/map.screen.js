import React, {useState, useEffect, useContext} from 'react'
import { useNavigation} from '@react-navigation/native'
import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import {SafeArea} from '../../../components/utility/safe-area.component'
import {SearchBar} from '../components/search.component'
import {MapCallout} from '../components/map-callout.component'

import {LocationContext} from '../../../services/location/location.context';
import {RestaurantContext} from '../../../services/restaurants/restaurant.context'

export const MapScreen = () => {
    const navigation = useNavigation();
    const {location} = useContext(LocationContext)
    const {restaurants = []} = useContext(RestaurantContext)

    const [latDelta, setLatDelta] = useState(0) //determine the zoom-level

    const { lat, lng, viewport } = location;
    

    useEffect(()=>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
    
        setLatDelta(northeastLat - southwestLat);
    },[location, viewport])

    return (
        <SafeArea>
            <SearchBar/>
                <Map
                    region={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: latDelta,
                        longitudeDelta: 0.02, //default zoom-value
                    }}>
                    {restaurants.map((restaurant)=>{
                        return (
                            <MapView.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }}>
                                <MapView.Callout onPress={()=> navigation.navigate("_RestaurantDetail", {restaurant})}>
                                    <MapCallout isMap restaurant={restaurant}/>
                                </MapView.Callout>
                            </MapView.Marker>
                        )
                        
                    })}
                </Map>
        </SafeArea>    
    )
}

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;
