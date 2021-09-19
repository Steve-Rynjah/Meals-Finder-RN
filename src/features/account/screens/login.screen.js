import React, {useState, useContext, useEffect} from 'react'
import {AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput} from '../components/account.styles'
import {ActivityIndicator} from 'react-native-paper'

import {Text} from '../../../components/typography/text.component'
import {Spacer} from '../../../components/spacer/spacer.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context'

export const LoginScreen = () => {
    const {onLogin, error, isLoading} = useContext(AuthenticationContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <AccountBackground>
            <AccountCover/>
                <AccountContainer>
                    <AuthInput
                        label="E-mail"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        theme={{colors:{primary: '#e62f2c'}}}
                        underlineColor= "transparent"
                        onChangeText={(u) => setEmail(u)}
                    />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        theme={{colors:{primary: '#e62f2c'}}}
                        underlineColor= "transparent"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                    {/* {error && (
                    <Spacer size="large">
                        <Text variant="error">{error}</Text>
                    </Spacer>
                    )} */}
                <Spacer size="large">
                    {!isLoading ? 
                        <AuthButton
                            mode="contained"
                            onPress={() => onLogin(email, password)}
                            >
                            Login
                        </AuthButton> 
                    : <ActivityIndicator animating={true} color="#e62f2c"/>}
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
}