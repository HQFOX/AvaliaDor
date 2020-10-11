

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
  

export default Pathology = ({navigation}) => {
    return (
        <View>
            <Text> End </Text>
            <Button
                title="Até 2 por dia"
                onPress={() => 
                    navigation.navigate("Oncologia")}
                    />
            <Button
                title="Mais de 4 por dia"
                onPress={() => 
                    navigation.navigate("Oncologia")}
                    />
        </View>
    )
}