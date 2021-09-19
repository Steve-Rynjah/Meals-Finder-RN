import React from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity, Platform} from 'react-native'
import WebView from 'react-native-webview'
import {Text} from '../typography/text.component'

const isAndroid = Platform.OS === "android"
    
export const CompactRestaurantInfo = ({restaurant, isMap}) => {
    const Image = (isAndroid && isMap) ? CompactWebview : CompactImage;
    
    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
                <Text center variant="caption" numberOfLines={3}>
                    {restaurant.name}
                </Text>
        </Item>
    )
}

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding:10px;
  margin-right: 7px;
  justify-content: space-between;
  max-width: 120px;
  align-items: center;
`;