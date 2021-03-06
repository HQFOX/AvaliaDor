

import React, { useState } from 'react';

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

import Slider from '@react-native-community/slider';
  

export default Home = ({navigation}) => {

    const [ pain, setPain ] = useState(0)
    return (
        <View>
            <Text> Home </Text>
            <Button
                title="Próximo"
                onPress={() => 
                    navigation.navigate("Screen1")}
                    />
            <Text >Intensidade da dor {pain} </Text>
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={10}
                step={1}
                value={pain}
                onValueChange={pain => setPain(pain)}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
  />
        </View>
    )
}