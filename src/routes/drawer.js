import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack'
import TTVStack from './TTVStack';
import TFStack from './TFStack';
import GPStack from './GPStack';
import VideoStack from './VideoStack';

const RootDrawerNavigator = createDrawerNavigator({
    'Home': {
        screen: HomeStack,
    },
    'Government Projects': {
        screen: GPStack,
    },
    'Trade Fairs': {
        screen: TFStack,
    },
    'Track Top Vloggers': {
        screen: TTVStack,
    },
    'Video': {
        screen: VideoStack,
    },
    
});

export default createAppContainer(RootDrawerNavigator);