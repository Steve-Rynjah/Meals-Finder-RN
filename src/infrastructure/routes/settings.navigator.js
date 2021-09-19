import React from 'react'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators} from "@react-navigation/stack";

import { SettingsScreen} from '../../features/settings/screens/setting.screen'
import { FavoritesScreen} from '../../features/settings/screens/favorites.screen'
import { CameraScreen} from '../../features/settings/screens/camera.screen'

const Stack = createStackNavigator();

export const SettingNavigator = ({navigation, route}) => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="_Settings" component={SettingsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="_Favorites" component={FavoritesScreen} options={{headerShown: false}}/>
            <Stack.Screen name="_Camera" component={CameraScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}