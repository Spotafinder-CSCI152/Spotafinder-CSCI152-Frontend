import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import login from '../screens/login/scene';
import register from '../screens/register/scene';
import home from '../screens/home/scene';
import area from '../screens/area/scene';
import friend from '../screens/friend/scene';
import setting from '../screens/setting/scene';
import chat from '../screens/chat/scene';
import bookroom from '../screens/bookroom/scene';
import controlroom from '../screens/controlrooms/scene';
import newsfeed from '../screens/newsfeed/scene'
import graph from '../screens/graph/list'

export default createAppContainer(
    createSwitchNavigator(
        {
            'Area': {screen: area},
            'Bookroom':{screen:bookroom},
            'Chat': {screen: chat},
            'Controlroom' :{screen: controlroom},
            'Friend': {screen: friend},
            'Home': {screen: home},
            'Login': {screen: login},
            'Newsfeed' :{screen: newsfeed},
            'Register': {screen: register},
            'Setting': {screen: setting},
            'Graph': {screen: graph}
            
        },
        {
            initialRouteName: 'Home',
        },
    )
);
