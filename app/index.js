/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import productList from './screens/productList';
import categoryList from './screens/categoryList';
import productDetail from './screens/productDetail';
const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="categoryList"
        component={categoryList}
        options={{title: 'Category List'}}
      />
      <Stack.Screen
        name="productList"
        component={productList}
        options={{title: 'Product List'}}
      />
      <Stack.Screen
        name="productDetail"
        component={productDetail}
        options={{title: 'Product Detail'}}
      />
    </Stack.Navigator>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
