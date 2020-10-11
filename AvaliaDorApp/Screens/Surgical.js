

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

  

export default Surgical = ({navigation}) => {

    const [ autonomy, setAutonomy ] = useState('')
    return (
        <View>
            <Text> Episodio cirúrgico </Text>
            <Button
                title="Nâo"
                onPress={() => 
                    navigation.navigate("Pensos")}
                    />
            <Button
                title="Minor"
                onPress={() => 
                    navigation.navigate("Pensos")}
                    />
            <Button
                title="Major"
                onPress={() => 
                navigation.navigate("Pensos")}
                    />
        </View>
    )
}