

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
  
  

export default Autonomy = ({navigation}) => {

    const [ autonomy, setAutonomy ] = useState('')
    return (
        <View>
            <Text> Autonomia do Paciente </Text>
            <Button
                title="Autónomo"
                onPress={() => 
                    navigation.navigate("Episódio cirúrgico")}
                    />
            <Button
                title="Sonolência"
                onPress={() => 
                    navigation.navigate("Episódio cirúrgico")}
                    />
            <Button
                title="Desorientação"
                onPress={() => 
                navigation.navigate("Episódio cirúrgico")}
                    />
            <Button
                title="Demência"
                onPress={() => 
                navigation.navigate("Episódio cirúrgico")}
                    />
        </View>
    )
}