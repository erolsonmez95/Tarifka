import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './Pages/Categories';
import Meals from './Pages/Meals';
import MealDetail from './Pages/MealDetail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {color: 'orange'},
          }}
          component={Categories}
        />
        <Stack.Screen
          options={{
            title: 'Meals',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {color: 'orange'},
          }}
          name="Meals"
          component={Meals}
        />
        <Stack.Screen
          name="MealDetail"
          options={{
            title: 'MealDetail',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {color: 'orange'},
          }}
          component={MealDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
