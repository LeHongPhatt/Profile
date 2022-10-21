import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import {NavigationContainer} from '@react-navigation/native';
import TabBottomNavigation from './TabBottomNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const StackNavigation = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="About" component={About} />
    //   <Drawer.Screen name="abc" component={TabBottomNavigation}></Drawer.Screen>
    // </Stack.Navigator>
    <View></View>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
