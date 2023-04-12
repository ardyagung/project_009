import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProgateService from './progate_service';
import ProgateEvent from './progate_event';
import HomeIcon from '../img/home.png';
import ProgateIcon from '../img/progate.png'

const Tab = createBottomTabNavigator();

const Progate = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Progate Service"
        component={ProgateService}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={HomeIcon} style={styles.homeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Progate Event"
        component={ProgateEvent}
        options={{
          tabBarLabel: 'Progate',
          tabBarIcon: () => (
            <Image source={ProgateIcon} style={styles.progateIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  progateIcon: {
    width: 40,
    height: 40,
  },
});

export default Progate;