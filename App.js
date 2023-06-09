import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';

import TelaPrincipal from './src/pages/TelaPrincipal';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{
            title:"",
            headerStyle: {
              backgroundColor:"#AAA"
            }
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title:"",
            headerStyle: {
              backgroundColor:"#AAA"
            }
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title:"",
            headerStyle: {
              backgroundColor:"#AAA"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}