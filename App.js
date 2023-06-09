import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>

      <Stack.Navigator>
        
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title:"Tela de Login",
          headerStyle: {
            backgroundColor:"#AAA"
          }
        }}
        >
        </Stack.Screen>

        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title:"Tela de Cadastro",
          headerStyle: {
            backgroundColor:"#AAA"
          }
        }}
        >
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );
}
