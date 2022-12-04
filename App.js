import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';
import React, {useState, useEffect,useCallback} from "react";
import themeContext from "./config/themeconteks";
import theme from "./config/theme";
import { EventRegister } from 'react-native-event-listeners';
import Entypo from '@expo/vector-icons/Entypo';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Menu from './screen/menu';
import Login from './screen/login';
import Regis from './screen/regis';
import Home from './screen/home';
import Edit from './screen/edit';


const Stack = createStackNavigator();


export default function App(){
  const [appIsReady, setAppIsReady] = useState(false);
  const [mode, setMode] = useState(false);
  useEffect(() =>{
    let eventListener = EventRegister.addEventListener(
      "changeTheme", 
      (data)=>{
      setMode(data);
    });
    return()=>{
      EventRegister.removeEventListener(eventListener);
    }
  });
  return (
    <themeContext.Provider value ={mode === true ? theme.dark : theme.light}>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Menu' component={Menu}/>
        <Stack.Screen name = 'Login' component={Login}/>
        <Stack.Screen name = 'Regis' component={Regis}/>
        <Stack.Screen name = 'Home' component={Home}/>
        <Stack.Screen name = 'Edit' component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
  );
}