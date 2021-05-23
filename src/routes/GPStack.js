import { createStackNavigator } from 'react-navigation-stack';
import GP from '../screens/Progress';
import Header from '../routes/header';
import React from 'react';

const screen = {
    GP: {
        screen: GP,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Government Projects'/>,
            }
        }
    },
}
const GPStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: "#eee", height: 70}
    }
});

export default GPStack;