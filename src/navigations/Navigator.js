import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import Progress from '../screens/Progress';
//import TTV from '../screens/TTV';


const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    
    Login:{screen:Login},
    Register:{screen:Register},
    Progress:{screen:Progress},
    //TTV:{screen:TTV},
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);

// import {createStackNavigator} from 'react-navigation-stack';

// import {Animated, Easing } from 'react-native'
// import Login from '../screens/Login';
// import Register from '../screens/Register';
// import Progress from '../screens/Progress'
// import Welcome from '../screens/Welcome';
// import * as React from 'react';


// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import HomeStack from '../routes/homeStack'
// import TTVStack from '../routes/TTVStack';
// import TFStack from '../routes/TFStack';
// import GPStack from '../routes/GPStack';
// import VideoStack from '../routes/VideoStack';

// let logged = false;



// const stackNavigatorOptions = {
//     headerShown:false
// }



// const LoginStack = createStackNavigator({

//     Login:{screen:Login},
//     Register:{screen:Register},
//     Progress:{screen:Progress},
    
// },
// {
//     defaultNavigationOptions : stackNavigatorOptions
// }
// );

// const DrawerNavigation = createDrawerNavigator({
//     Home: {
//         screen: HomeStack,
//     },
//     Government_Projects: {
//         screen: GPStack,
//     },
//     Trade_Fairs: {
//         screen: TFStack,
//     },
//     Track_Top_Vloggers: {
//         screen: TTVStack,
//     },
//     Video_Stack: {
//         screen: VideoStack,
//     },
    
// });

// const loggedIn = (props) => {
//     logged = props.loggedin
// }


// const PrimaryNav = createSwitchNavigator({
//     drawerStack: { screen: DrawerNavigation },
//     loginStack: { screen: LoginStack },
    
//   }, {
//     // Default config for all screens
//     headerMode: 'none',
//     title: 'Main',
//     initialRouteName: 'LoginStack',
//     paths:'drawerStack',
//   })

//   export default createAppContainer(PrimaryNav);


// // export default class App extends React.Component {
  
// //     render() {
// //       return (
// //         //   <NavigationContainer>
// //         //       {logged ? <DrawerNavigation/> : <LoginStack/>}
// //         //   </NavigationContainer>
          
// //         );
// //     }
// //   }

