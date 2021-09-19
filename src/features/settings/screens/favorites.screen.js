import React, {useContext} from 'react'
import styled from 'styled-components/native'
import {FlatList, Pressable} from 'react-native' 

import { FavoritesContext} from '../../../services/favorites/favorites.context'
import { SafeArea} from '../../../components/utility/safe-area.component'
import { Text} from '../../../components/typography/text.component'



import { RestaurantInfoCard} from '../../restaurants/components/restaurant-info-card.component'

export const FavoritesScreen = ({navigation}) => {
    const {favorites} = useContext(FavoritesContext)
    return (
        favorites.length ? (
            <SafeArea>
                <ListItem
                    data={favorites}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                    renderItem={({item})=> {
                        return (
                            <Pressable onPress={()=> navigation.navigate("_RestaurantDetail", {restaurant: item})}>
                                <RestaurantInfoCard restaurant={item}/>
                            </Pressable>
                        )
                    }} 
                />
            </SafeArea>
        ) : (
            <NoFavoritesArea>
                <Text center variant="label">No favorites yet</Text>
            </NoFavoritesArea>
        )
    )
}

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const ListItem = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,   
    }
})``;