import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components/native'
import {Searchbar} from 'react-native-paper'

import {LocationContext} from '../../../services/location/location.context'

export const SearchBar = ({isFavoriteToggled, onFavoriteToggled}) => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    
    useEffect(()=>{
        setSearchKeyword(keyword)
    },[keyword])

    return (
        <SearchContainer>
            <Searchbar 
                icon={isFavoriteToggled ? "heart" : "heart-outline"}
                onIconPress={onFavoriteToggled}
                placeholder="Search for your meal"
                value={searchKeyword}
                onSubmitEditing={()=>{
                    search(searchKeyword)
                }}
                onChangeText={(text)=>{
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}

const SearchContainer = styled.View`
    background-color: ${(props)=> props.theme.colors.bg.secondary};
    padding: ${(props)=> props.theme.space[3]};
`;