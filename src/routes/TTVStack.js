import { createStackNavigator } from 'react-navigation-stack';
import TTV from '../screens/TTV';
import Header from '../routes/header';
import React from 'react';

const screen = {
    TTV: {
        screen: TTV,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Track Top Vloggers'/>,
            }
        }
    },
}
const TTVStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: "#eee", height: 70}
    }
});

export default TTVStack;