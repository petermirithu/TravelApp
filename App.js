import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/home';

const {Navigator, Screen } = createStackNavigator()

export default class App extends Component{
  render(){
    return (    
      <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
    )
  }
}
