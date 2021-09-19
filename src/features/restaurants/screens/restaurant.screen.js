import React, {useContext, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import styled from 'styled-components/native'
import {FlatList, Pressable} from 'react-native'
import {ActivityIndicator, Colors} from 'react-native-paper'

import {SafeArea} from '../../../components/utility/safe-area.component'
import {RestaurantInfoCard} from '../components/restaurant-info-card.component'
import {SearchBar} from '../components/search.component'
import {FavoritesBar} from '../../../components/favorites/favorites-bar.component'
import {FadeInView} from '../../../components/animations/fade.animation'

import {RestaurantContext} from '../../../services/restaurants/restaurant.context'
import {FavoritesContext} from '../../../services/favorites/favorites.context'


export const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {restaurants, isLoading} = useContext(RestaurantContext);
    const {favorites} = useContext(FavoritesContext);
    const [isToggled, setIsToggled] = useState(false);
    
    return (
        <SafeArea>
            <SearchBar 
                isFavoriteToggled={isToggled} 
                onFavoriteToggled={()=> setIsToggled(!isToggled)} 
                />
            {isLoading && (
                    <ActivityIndicator
                        style={{alignSelf: 'center', top: '34%'}}
                        size={50}
                        animating={true}
                        color={Colors.blue300}
                    /> 
            )}
            {isToggled && <FavoritesBar favorites={favorites} onNavigate={navigation.navigate}/>}
            <List
                data={restaurants}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                renderItem={({item})=> {
                    return (
                        <Pressable onPress={()=> navigation.navigate("_RestaurantDetail", {restaurant: item})}>
                            <FadeInView>
                                <RestaurantInfoCard restaurant={item}/>
                            </FadeInView>
                        </Pressable>
                    )
                }} 
            />
      </SafeArea>
    )
}

const List = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,   
    }
})``;




