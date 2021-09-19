import React, {useState, createContext, useEffect} from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
import {loginRequest, registerRequest} from './authentication.service'
import firebase from 'firebase';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [emailVisible, setEmailVisible] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [authVisible, setAuthVisible] = useState(false)
    const [repeatVisible, setRepeatVisible] = useState(false)

    const alertEmailTrigger = () => setEmailVisible(!emailVisible)
    const alertPasswordTrigger = () => setPasswordVisible(!passwordVisible)
    const alertAuthTrigger = () => setAuthVisible(!authVisible)
    const alertRepeatTrigger = () => setRepeatVisible(!repeatVisible)
    

    //to keep the user login consistent
    firebase.auth().onAuthStateChanged((usr)=>{
        if(usr){
          setUser(usr)
          setIsLoading(false)
        } else {
          setIsLoading(false)
        }
    })

    const onLogin = (email, password) => {
      if(email === ''){
        alertEmailTrigger()
      } else if(password === '') {
        alertPasswordTrigger()
      } else {
        setIsLoading(true);
        loginRequest(email, password)
          .then((u) => {
            setUser(u);
            setIsLoading(false);
          })
          .catch((e) => {
            alertAuthTrigger();
          })
      }
        
      };

    const onRegister = (email, password, repeatedPassword) => {

      if(email === '') {
        alertEmailTrigger()
      } else if(password === '') {
        alertPasswordTrigger()
      } else if(password !== repeatedPassword) {
        alertRepeatTrigger()
      } else {
        setIsLoading(true)
        registerRequest(email, password)
        .then((u) => {
          setUser(u);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          alertAuthTrigger();
        });
      }
    }
    
    const onLogout = () => {
      setUser(null)
      firebase.auth().signOut();
    }

    useEffect(()=>{
      setError(null)
    },[])

    return (
        <React.Fragment>
            <AuthenticationContext.Provider 
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}>
            {children}
        </AuthenticationContext.Provider>
          <AwesomeAlert
            show={emailVisible}
            title="Empty Field"
            message="Please enter your email"
            closeOnTouchOutside={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e62f2c"
            onConfirmPressed={()=> setEmailVisible(false)}
          />
          <AwesomeAlert
            show={passwordVisible}
            title="Empty Field"
            message="Please enter your password"
            closeOnTouchOutside={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e62f2c"
            onConfirmPressed={()=> setPasswordVisible(false)}
          />
          <AwesomeAlert
            show={authVisible}
            title="Authentication Fail"
            message="Please enter a correct credentials"
            closeOnTouchOutside={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e62f2c"
            onConfirmPressed={()=> setAuthVisible(false)}
          />
          <AwesomeAlert
            show={repeatVisible}
            title="Password did not match"
            message="Please enter the same password"
            closeOnTouchOutside={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#e62f2c"
            onConfirmPressed={()=> setRepeatVisible(false)}
          />
        </React.Fragment>
    )
}