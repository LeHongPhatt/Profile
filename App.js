import {StyleSheet, Text, View, Button} from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './naviagtion/StackNavigation';
import Home from './src/Pages/Home';
import About from './src/Pages/About';
import Header from './component/Header';
import TabBottomNavigation from './naviagtion/TabBottomNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './naviagtion/AppStack';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer  >
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
