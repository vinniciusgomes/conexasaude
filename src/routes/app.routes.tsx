import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import AppointmentDetails from '../screens/AppointmentDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#F2F2F6'},
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="AppointmentDetails" component={AppointmentDetails} />
  </App.Navigator>
);

export default AppRoutes;
