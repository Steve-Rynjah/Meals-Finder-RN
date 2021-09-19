import React, {useState, useContext, useEffect} from 'react'
import {AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput} from '../components/account.styles'
import {ActivityIndicator, Colors} from 'react-native-paper'

import {Text} from '../../../components/typography/text.component'
import {Spacer} from '../../../components/spacer/spacer.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context'

export const RegisterScreen = () => {
    const {error, onRegister, isLoading} = useContext(AuthenticationContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    
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
                        label="Password (min 6)"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        theme={{colors:{primary: '#e62f2c'}}}
                        underlineColor= "transparent"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        theme={{colors:{primary: '#e62f2c'}}}
                        underlineColor= "transparent"
                        onChangeText={(p) => setRepeatedPassword(p)}
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
                            onPress={() => onRegister(email, password, repeatedPassword)}
                            >
                            Register        
                        </AuthButton>
                    : <ActivityIndicator animating={true} color="#e62f2c"/>}    
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
}