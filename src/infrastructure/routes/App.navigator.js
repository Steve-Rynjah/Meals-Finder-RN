import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { SettingNavigator} from './settings.navigator'
import { RestaurantsNavigator} from './restaurants.navigator'
import { MapScreen} from '../../features/map/screens/map.screen'

import {FavoritesContextProvider} from '../../services/favorites/favorites.context'
import {LocationContextProvider} from '../../services/location/location.context'
import {RestaurantContextProvider} from '../../services/restaurants/restaurant.context'

    const TAB_ICON = {
        Restaurants: "md-restaurant",
        Map: "md-map",
        Settings: "md-settings"
      }
    
      const createScreenOptions = ({route}) => {
        const iconName = TAB_ICON[route.name]
          return {
            tabBarIcon: ({size, color}) => (
              <Ionicons name={iconName} size={size} color={color} />
            ),
            tabBarActiveTintColor: '#2d2370',
            tabBarInactiveTintColor: '#9C9C9C',
          }
        }
    
    const Tab = createBottomTabNavigator();

    export const AppNavigator = () => {
      return (
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Tab.Navigator screenOptions={createScreenOptions}>
                  <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{headerShown: false}}/>
                  <Tab.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
                  <Tab.Screen name="Settings" component={SettingNavigator} options={{headerShown: false}}/>
              </Tab.Navigator>
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>      
      )
}