import React, { useContext, useState, useCallback } from "react";
import {TouchableOpacity} from 'react-native'
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect} from '@react-navigation/native'
import { SafeArea} from "../../../components/utility/safe-area.component";
import { Spacer} from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from "../../../services/authentication/authentication.context"
import { Text} from "../../../components/typography/text.component"

export const SettingsScreen = ({navigation}) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
      };
    
      useFocusEffect(
        useCallback(() => {
        getProfilePicture(user);
        }, [user])
        );

      
    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={()=> navigation.navigate("_Camera")}>
                    {!photo && (
                        <Avatar.Icon size={180} icon="account-circle" backgroundColor="transparent"/>
                    )}
                    {photo && (
                        <Avatar.Image
                        size={180}
                        source={{ uri: photo }}
                        backgroundColor="transparent"
                        />
                    )}
                </TouchableOpacity>
                    <Spacer position="top" size="large">
                        <Text variant="label">{user.email}</Text>
                    </Spacer>
            </AvatarContainer>

            <List.Section>
                <Item
                    title="Favorites"
                    titleStyle={{color: '#FFF'}}
                    descriptionStyle={{color:'#FFF'}}
                    description="View your favorites"
                    left={(props) => <List.Icon {...props} color="#FFF" icon="heart" />}
                    onPress={()=> navigation.navigate("_Favorites")}
                />
                <Item
                    title="Logout"
                    titleStyle={{color: '#FFF'}}
                    left={(props) => <List.Icon {...props} color="#FFF" icon="logout" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
}

const Item = styled(List.Item)`
  top: 50px;  
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  top: 15px;
`;