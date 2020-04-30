import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import Splash from '../Screens/splash';
import Home from '../Screens/Home';


const screens = {
    
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false
        }
    }, 
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);