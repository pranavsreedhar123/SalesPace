import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
//import TTV from '../screens/TTV';


const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    
    Login:{screen:Login},
    Register:{screen:Register},
    Welcome:{screen:Welcome},
    //TTV:{screen:TTV},
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);

