import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="#F9F7F7" barStyle="light-content"/>
            <Routes/>
        </NavigationContainer>
    );
}