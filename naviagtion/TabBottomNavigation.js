import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Header from '../component/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../src/Pages/Profile';
import TopTabNavigation from './TopNavigation';
const Tab = createBottomTabNavigator();
export default class TabBottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator       
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F35D38',
          tabBarStyle:{
            borderTopRightRadius:30,
            borderTopLeftRadius:30
          }
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
