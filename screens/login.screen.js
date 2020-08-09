import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = props => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Sign-In" onPress={() => {
                props.navigation.navigate('Dashboard');
            }} />
        </View>
    )
}

export default LoginScreen;
