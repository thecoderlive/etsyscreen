import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Etsy from './Etsy'

const Root = createStackNavigator()

export default function App() {
return (
    <NavigationContainer>
        <Root.Navigator
            initialRouteName="Etsy"
            screenOptions={{
                headerMode:'screen',
                headerStyle: { backgroundColor: 'white' },
                title: null,
                cardOverlayEnabled:true,
                cartStyle:{flex:1},
                animationEnabled:true,
                gestureEnabled:true
            }}
            >
        <Root.Screen name="Etsy" component={Etsy} />
        </Root.Navigator>
    </NavigationContainer>
)}