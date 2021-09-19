import styled from 'styled-components/native'
import {SafeAreaView, StatusBar} from 'react-native'

export const SafeArea = styled(SafeAreaView)`
    flexShrink: 1;
    flexGrow: 1;
    flexBasis: 0;
    ${StatusBar.currentHeight && `margin-Top: ${StatusBar.currentHeight}px`};
    background-color: ${(props)=> props.theme.colors.bg.primary};
`;