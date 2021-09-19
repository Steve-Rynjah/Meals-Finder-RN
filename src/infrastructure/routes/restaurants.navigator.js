import React from 'react'

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {RestaurantScreen} from '../../features/restaurants/screens/restaurant.screen'
import {RestaurantDetailScreen} from '../../features/restaurants/screens/restaurant-detail.screen'

export const RestaurantsNavigator = () =>{
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}>
            <Stack.Screen name="_Restaurants" component={RestaurantScreen} options={{headerShown: false}}/>
            <Stack.Screen name="_RestaurantDetail" component={RestaurantDetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}