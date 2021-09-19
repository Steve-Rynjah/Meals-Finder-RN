import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import {colors} from '../../../infrastructure/theme/colors'


export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/Pizz.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  top: 10px;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.text.error,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 60px;
  padding: ${(props)=> props.theme.space[2]}
`;