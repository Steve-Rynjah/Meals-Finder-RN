import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import firebase from "firebase";

import {theme} from './src/infrastructure/theme'
import {ThemeProvider} from 'styled-components/native';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context'

import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import {Navigation} from './src/infrastructure/routes'

const firebaseConfig = {
  apiKey: "AIzaSyBpt3tbrX4LrsH_n9RG2hnfxGdloqJJpj4",
  authDomain: "meals-to-go-7772c.firebaseapp.com",
  projectId: "meals-to-go-7772c",
  storageBucket: "meals-to-go-7772c.appspot.com",
  messagingSenderId: "5790168916",
  appId: "1:5790168916:web:93d297104b8acc576f3ac1"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  const [oswaldLoaded] = useOswald({Oswald_400Regular});
  const [latoLoaded] = useLato({Lato_400Regular});

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

