import React from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator  } from 'react-navigation'; 
import All from './Components/All';
import Checked from './Components/Checked';
import Active from './Components/Active';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default createBottomTabNavigator ({
  Alls: All,
  Actives: Active ,
  Checkeds: Checked,
  
},


{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Alls') {
        iconName = `ios-menu${focused ? '' : '-outline'}`;
      } else if (routeName === 'Actives') {
        iconName = `ios-flash${focused ? '' : '-outline'}`;
      } else if (routeName === 'Checkeds') {
        iconName = `ios-checkbox${focused ? '' : '-outline'}`;
      }
       return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}


);

