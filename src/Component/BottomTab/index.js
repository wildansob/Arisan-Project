import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLOR from '../../Config/color';

//import screen
import HomeScreen from '../../Screen/Home';
import ListPesertaScreen from '../../Screen/ListPeserta/RouterNested';
import ProfileScreen from '../../Screen/Profile';

//import Icon
import Foundation from 'react-native-vector-icons/Foundation';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab = props => {
  return (
    <>
      {/* BottomTab */}
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: true}}>
        <Tab.Screen
          name="List Arisan"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Foundation name="clipboard-notes" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="List Peserta"
          component={ListPesertaScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IonIcons name="people-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            title: 'Profil',
            headerTitleStyle: {
              color: COLOR.Black,
            },
            headerStyle: {
              backgroundColor: COLOR.Primary,
            },
            tabBarIcon: ({color}) => (
              <IonIcons name="person-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
