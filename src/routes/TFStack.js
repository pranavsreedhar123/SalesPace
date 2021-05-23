import { createStackNavigator } from 'react-navigation-stack';
import GP from '../screens/Progress';
import Header from '../routes/header';
import React from 'react';

const screen = {
    TF: {
        screen: GP,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Trade Fairs'/>,
            }
        }
    },
}
const TFStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: "#eee", height: 70}
    }
});

export default TFStack;