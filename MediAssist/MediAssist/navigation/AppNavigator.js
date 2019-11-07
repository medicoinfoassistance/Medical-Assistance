import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ContactScreen from '../screens/Contacts';
const Dentist = () => <ContactScreen doctorType={'Dentist'} />
const Cardiologist = () => <ContactScreen doctorType={'Cardiologist'} />
const GeneralPractioner = () => <ContactScreen doctorType={'GeneralPractioner'}/>
const Pharmacy = () => <ContactScreen doctorType={'Pharmacy'}/>


import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createStackNavigator( {
    Home: HomeScreen,
    Dentist,
    Cardiologist,
    GeneralPractioner,
    Pharmacy
  },
  {
    initialRouteName: 'Home',
  })
);
