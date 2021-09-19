import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import {IconButton} from 'react-native-paper'
import { View , TouchableOpacity} from "react-native";

import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext} from '../../../services/authentication/authentication.context'

export const CameraScreen = ({navigation}) => {
  const {user} = useContext(AuthenticationContext)  
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

    const snap = async () => {
        if(cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.back}
    >
    <TouchableOpacity onPress={snap}>
        <InnerSnap
            icon="flash-circle"
            color="#F1F1F1"
            size={75}
        />
    </TouchableOpacity>
</ProfileCamera>
  );
};

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flexShrink: 1;
  flexGrow: 1;
  flexBasis: 0;
`;

const InnerSnap = styled(IconButton)`
  top: 275px;  
  align-self: center;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Switch = styled(IconButton)`
    top: 15px;
    padding: 15px;
    
`;