import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
} from 'react-native-tab-view';

import Contacts from './Contacts';
const Dentist = () => <Contacts doctorType={'Dentist'} />
const Cardiologist = () => <Contacts doctorType={'Cardiologist'} />
const GeneralPractioner = () => <Contacts doctorType={'GeneralPractioner'}/>
const Pharmacy = () => <Contacts doctorType={'Pharmacy'}/>

export default class DynamicWidthTabBarExample extends React.Component{
  static title = 'Scrollable tab bar (auto width)';
  static backgroundColor = '#3f51b5';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      { key: 'cardiologist', title: 'Cardiologist' },
      { key: 'dentist', title: 'Dentist' },
      { key: 'generalPractioner', title: 'General Practioner' },
      { key: 'pharmacy', title: 'Pharmacy' },
    ],
  };

   handleIndexChange = (index) =>
    this.setState({
      index,
    });

   renderTabBar = (
    props
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

   renderScene = SceneMap({
    dentist: Dentist,
    cardiologist: Cardiologist,
    generalPractioner: GeneralPractioner,
    pharmacy:Pharmacy,


  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
  tabStyle: {
    width: 'auto',
  },
});
