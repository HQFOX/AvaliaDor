

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
  

export default CronicPain = ({navigation}) => {
    return (
        <View>
            <Text> End </Text>
            <Button
                title="Não"
                onPress={() => 
                    navigation.navigate("End")}
            />
            <Button
                title="Dor Controlada"
                onPress={() => 
                navigation.navigate("End")}
            />

            <Button
                title="Dor Não Controlada"
                onPress={() => 
                navigation.navigate("End")}
            />  
        </View>
    )
}