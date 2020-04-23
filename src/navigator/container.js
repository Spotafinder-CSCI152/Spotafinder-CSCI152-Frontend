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
 import Room2 from '../screens/bookroom/room2/scene';
 import Room3 from '../screens/bookroom/room3/scene';
 import Room4 from '../screens/bookroom/room4/scene';
 import Room5 from '../screens/bookroom/room5/scene';
 //import ToDoItem from '../screens/checkbox/scene';
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
              'Room2':{screen:Room2},
              'Room3':{screen:Room3},
              'Room4':{screen:Room4},
              'Room5':{screen:Room5},
             // 'Main': {screen: Main},
            
        },
        {
            initialRouteName: 'Home',
        },
    )
);

