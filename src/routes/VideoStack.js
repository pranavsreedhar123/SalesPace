import { createStackNavigator } from 'react-navigation-stack';
import videoStack from '../screens/Progress';
import Header from '../routes/header';
import React from 'react';

const screen = {
    VideoStack: {
        screen: videoStack,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Video'/>,
            }
        }
    },
}
const VideoStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: "#eee", height: 70}
    }
});

export default VideoStack;