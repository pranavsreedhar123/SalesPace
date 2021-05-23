import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Welcome';
import Header from '../routes/header';
import React from 'react';

const screen = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Welcome'/>,
            }
        }
    },
}
const HomeStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: "#eee", height: 70},
    }
});

export default HomeStack;