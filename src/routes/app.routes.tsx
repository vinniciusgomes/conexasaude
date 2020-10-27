import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#F9F9F9'},
    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
