import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons'
import {TouchableOpacity} from 'react-native'
import {FavoritesContext} from '../../services/favorites/favorites.context'

export const Favorite = ({restaurant}) => {
    const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoritesContext);
    const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);
    
    return (
        <FavoriteButton onPress={()=> !isFavorite ? addToFavorites(restaurant) : removeFromFavorites(restaurant)}>
            <AntDesign 
                name={isFavorite ? "heart" : "hearto"} 
                size={24} 
                color={isFavorite ? "#e62f2c" : "#FFF"}/>
        </FavoriteButton>
    )
}

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;