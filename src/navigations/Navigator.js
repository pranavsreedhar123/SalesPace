// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import Login from '../screens/Login';
// import Register from '../screens/Register';
// import Welcome from '../screens/Welcome';
// import Progress from '../screens/Progress';
// //import TTV from '../screens/TTV';


// const stackNavigatorOptions = {
//     headerShown:false
// }
// const AppNavigator = createStackNavigator({
    
//     Login:{screen:Login},
//     Register:{screen:Register},
//     Progress:{screen:Progress},
//     //TTV:{screen:TTV},
    
// },
// {
//     defaultNavigationOptions : stackNavigatorOptions
// }
// );
// export default createAppContainer(AppNavigator);

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



import * as React from 'react';
import {View, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';
// import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Container, Header, Left, Body, Right, Button, Title, Text, List, ListItem, Form} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {IMAGE} from './src/constants/Image'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../screens/Login'
import Register from '../screens/Register'
import HomeStack from '../routes/homeStack';
import GPStack from '../routes/GPStack';
import TFStack from '../routes/TFStack';
import TTVStack from '../routes/TTVStack';
import VideoStack from '../routes/VideoStack';

Icon.loadFont();

class SideMenu extends React.Component {
    render() {
      return (
        <SafeAreaView style={{flex:1}}>
          <View style={{height: 100, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/user.png')}
              style={{height:120,width:120,borderRadius:60}}/>
          </View>
          <ScrollView>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Home</Text>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('GP')}>
                <Text>Government Projects</Text>
              </ListItem>   
              <ListItem onPress={() => this.props.navigation.navigate('TF')}>
                <Text>Trade Fairs</Text>
              </ListItem> 
              <ListItem onPress={() => this.props.navigation.navigate('TTV')}>
                <Text>Track Top Vloggers</Text>
              </ListItem> 
              <ListItem onPress={() => this.props.navigation.navigate('Video')}>
                <Text>Video</Text>
              </ListItem> 
            </List>
          </ScrollView>
          <List>
              <ListItem noBorder onPress={()=>this.props.navigation.navigate('auth')}>
                <Text>Logout</Text>
              </ListItem> 
          </List>
        </SafeAreaView>
      )
    }
  }

const navOptionHandler = (navigation) => ({
  header: null
})


const MainStack = createStackNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: navOptionHandler
  },
  GP: {
    screen: GPStack,
    navigationOptions: navOptionHandler
  },
  TF: {
    screen: TFStack,
    navigationOptions: navOptionHandler
  },
  TTV: {
    screen: TTVStack,
    navigationOptions: navOptionHandler
  },
  Video: {
    screen: VideoStack,
    navigationOptions: navOptionHandler
  }
},{initialRouteName: 'Home'})

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 3/4
  }

)

const authStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionHandler
  }
})

const MainApp = createSwitchNavigator(
  {
  app: appDrawer,
  auth:authStack
  },
  {
    initialRouteName:'auth'
  }
)

export default createAppContainer(MainApp);