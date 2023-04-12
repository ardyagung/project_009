import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const ProgateEvent = ({navigation}) => {
  useFocusEffect(() => {
    alert('ProgateEvent Screen was focused');
    return () => {
      alert('ProgateEvent Screen was unfocused');
    };
  });
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Progate Event</Text>
      <Text>Join Progate Event to learn coding!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});

export default ProgateEvent;