import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './Screens/Home.js';
import Screen1 from './Screens/Screen1';
import End from './Screens/End';
import PainIntensity from './Screens/PainIntensity.js';
import Autonomy from './Screens/Autonomy.js';
import Surgical from './Screens/Surgical.js';
import Bandages from './Screens/Bandages.js';
import Procedures from './Screens/Procedures.js';
import Pathology from './Screens/Pathology.js';
import Oncology from './Screens/Oncology.js';
import CronicPain from './Screens/CronicPain.js';

const Stack = createStackNavigator();


const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="Intensidade da Dor"
              component={PainIntensity}
            />
            <Stack.Screen
              name="Autonomia"
              component={Autonomy}
            />
            <Stack.Screen
              name="Episódio cirúrgico"
              component={Surgical}
            />
            <Stack.Screen
              name="Pensos"
              component={Bandages}
            />
            <Stack.Screen
              name="Procedimentos"
              component={Procedures}
            />
            <Stack.Screen
              name="Patologias"
              component={Pathology}
            />
            <Stack.Screen
              name="Oncologia"
              component={Oncology}
            />
            <Stack.Screen
              name="Dor Crónica"
              component={CronicPain}
            />
            <Stack.Screen
              name="End"
              component={End}
            />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
