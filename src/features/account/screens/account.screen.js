import React from 'react'
import LottieView from 'lottie-react-native'
import {AccountBackground, AccountCover, AccountContainer, AuthButton, AnimationWrapper} from '../components/account.styles'

import {Spacer} from '../../../components/spacer/spacer.component'

export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground>
            <AccountCover/>
                    <LottieView
                        autoSize
                        key="animation"
                        autoPlay
                        resizeMode="cover"
                        source={require('../../../assets/lottie_1.json')}
                    /> 
            <AccountContainer>
                <AuthButton
                    icon="account-arrow-right"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                    >
                    Login
                </AuthButton>
                <Spacer size="large">
                <AuthButton
                    icon="file-document-edit"   
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                    >
                    Register
                </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
}