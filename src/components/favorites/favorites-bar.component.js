import React from 'react'
import { ScrollView, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";
import {Spacer} from '../../components/spacer/spacer.component'

export const FavoritesBar = ({favorites, onNavigate}) => {
    if (!favorites.length) {
        return null;
    }

    return (
       <>
         <FavoriteHeader>
            <Text variant="favorites_header">Favorites</Text>
        </FavoriteHeader>

        <FavoritesWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map((restaurant) => {
                        const key = restaurant.name;
                        return (
                            <Spacer key={key} position="left" size="medium">
                                <TouchableOpacity onPress={() => onNavigate("_RestaurantDetail", {restaurant})}>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                        );
                    })}
            </ScrollView>
        </FavoritesWrapper>
       </>
    )
}

const FavoritesWrapper = styled.View`
    border-radius: 10px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    background-color: #FFF;
`;

const FavoriteHeader = styled.View`
 padding: 15px;
`;