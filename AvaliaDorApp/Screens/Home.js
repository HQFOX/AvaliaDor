

import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
import Screen1 from './Screen1';
  

export default Home = ({navigation}) => {
    return (
        <View>
            <Text> Home </Text>
            <Button
                title="Próximo"
                onPress={() => 
                    navigation.navigate("Screen1")}
                    />
        </View>
    )
}