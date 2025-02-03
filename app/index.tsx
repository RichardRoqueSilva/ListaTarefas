import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from '../src/screens/TodoScreen';
import AboutScreen from '../src/screens/AboutScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: 'list-circle' | 'list-circle-outline' | 'information-circle' | 'information-circle-outline' = 'information-circle-outline';

                if (route.name === 'Agenda Diária') {
                  iconName = focused ? 'list-circle' : 'list-circle-outline';
                } else if (route.name === 'Sobre') {
                  iconName = focused ? 'information-circle' : 'information-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
              <Tab.Screen
              name="Agenda Diária"
              component={TodoScreen}
              options={{
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                  },
            }}
              />
            <Tab.Screen
              name="Sobre"
              component={AboutScreen}
              options={{
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                  },
            }}
            />
          </Tab.Navigator>
  );
}