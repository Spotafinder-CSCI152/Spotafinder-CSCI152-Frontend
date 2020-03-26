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
import friendslist from '../screens/friendslist/scene';
 import AssetExample from '../screens/graph/AssetExample';
// import Main from '../screens/graph/Main';

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
            'Friendslist' :{screen: friendslist},
            'Register': {screen: register},
            'Setting': {screen: setting},
              'AssetExample':{screen: AssetExample},
            //  'Main': {screen: Main},
            
        },
        {
            initialRouteName: 'Home',
        },
    )
);
