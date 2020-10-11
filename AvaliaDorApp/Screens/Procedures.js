

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
  

export default Procedures = ({navigation}) => {
    return (
        <View>
            <Text> End </Text>
            <Button
                title="Até 2 por dia"
                onPress={() => 
                    navigation.navigate("Patologias")}
                    />
            <Button
                title="Mais de 4 por dia"
                onPress={() => 
                    navigation.navigate("Patologias")}
                    />
        </View>
    )
}