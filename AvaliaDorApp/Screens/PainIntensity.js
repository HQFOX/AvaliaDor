

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
import Autonomy from "./Autonomy"

import Slider from '@react-native-community/slider';
  

export default PainIntensity = ({navigation}) => {

    const [ pain, setPain ] = useState(0)
    return (
        <View>
            <Text >Valor da Intensidade da Dor {pain} </Text>
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
            <Button
                title="Próximo"
                onPress={() => 
                navigation.navigate("Autonomia")}
            />
        </View>
    )
}