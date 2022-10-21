import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from '../component/Header';
import About from '../src/Pages/About';
import DrawerCustom from '../component/DrawerCustom';
import Profile from '../src/Pages/Profile';
import Settings from '../src/Pages/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBottomNavigation from './TabBottomNavigation';

const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerCustom {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TabBottomNavigation}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="ABout"
        component={About}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Icon
              name="info-circle"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
