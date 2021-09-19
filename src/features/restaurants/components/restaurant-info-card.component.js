import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Favorite} from '../../../components/favorites/favorite.component'

import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Icon,
    Section,
    SectionEnd,
    Rating
} from './restaurant-info-card.styles'

import star from '../../../../assets/star';
import open from '../../../../assets/open';



export const RestaurantInfoCard = ({ restaurant = {} }) => {
    //destructuring
    const {
        name = "Mellow Mood Cafe`",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ['https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fgrq9zjigno6sigbmvyf'],
        address = "Laimu-793001",
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily,
        placeId
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5}>
            <Favorite restaurant={restaurant}/>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="restaurant_name">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, index) => (
                            <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Text variant="address">{address}</Text>
            </Info>
        </RestaurantCard>
    )
}



