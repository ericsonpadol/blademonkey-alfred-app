import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screen components
import LoginScreen from '../screens/login.screen';
import RegisterScreen from '../screens/register.screen';
import DashboardScreen from '../screens/dashboard.screen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Login" component={LoginScreen} />
                <Screen name="Registration" component={RegisterScreen} />
                <Screen name="Dashboard" component={DashboardScreen} />
            </Navigator>
        </NavigationContainer>
    );
}


export default AppNavigator;
