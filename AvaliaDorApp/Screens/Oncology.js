

import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
  

export default Oncology = ({navigation}) => {
    return (
        <View>
            <Button
                title="Até 2 por dia"
                onPress={() => 
                    navigation.navigate("Dor Crónica")}
                    />
            <Button
                title="Mais de 4 por dia"
                onPress={() => 
                    navigation.navigate("Dor Crónica")}
                    />
        </View>
    )
}