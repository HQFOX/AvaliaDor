

import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  
import Slider from '@react-native-community/slider';
  
export default End = () => {
    const [risk, setRisk ] = useState(69)



    return (
        <View>
            <Text > Valor de Risco </Text>
            <Slider
                style={{width: 400, height: 80}}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={risk}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    )
}