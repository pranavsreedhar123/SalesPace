import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack'
import TTVStack from './TTVStack';
import TFStack from './TFStack';
import GPStack from './GPStack';
import VideoStack from './VideoStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Government_Projects: {
        screen: GPStack,
    },
    Trade_Fairs: {
        screen: TFStack,
    },
    Track_Top_Vloggers: {
        screen: TTVStack,
    },
    Video_Stack: {
        screen: VideoStack,
    },
    
});

export default createAppContainer(RootDrawerNavigator);