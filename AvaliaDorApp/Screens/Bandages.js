

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
  

export default Bandages = ({navigation}) => {
    return (
        <View>
            <Text> Pensos </Text>
            <Button
                title="Nâo se aplica"
                onPress={() => 
                    navigation.navigate("Procedimentos")}
                    />
            <Button
                title="Pensos Simples"
                onPress={() => 
                    navigation.navigate("Procedimentos")}
                    />
            <Button
                title="Pensos Complexos"
                onPress={() => 
                navigation.navigate("Procedimentos")}
                    />
        </View>
    )
}