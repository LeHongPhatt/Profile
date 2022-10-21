import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Home from '../screen/Home';
import Cities from '../src/Pages/Cities';
import Destinations from '../src/Pages/Destinations';
import Experiences from '../src/Pages/Experiences';
import All from '../src/Pages/All';
const Tab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor:"#FFF",
          width: 70,
          left: 43,
        },
        tabBarStyle: {
          width: '100%',
          borderWidth: 0,
          elevation: 0,
          backgroundColor: 'transparent',
          marginBottom: 10,
          height: 40,
        },
        tabBarActiveTintColor: '#F35D38',
        tabBarLabelStyle: {},
      }}>
      {/* <Tab.Screen
        name="Feed"
        component={Home}
        
      /> */}
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Cities" component={Cities} />
      <Tab.Screen name="Destinations" component={Destinations} />
      <Tab.Screen name="Experiences" component={Experiences} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
