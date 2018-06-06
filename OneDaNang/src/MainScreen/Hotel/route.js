
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import DetailHotel from './DetailHotel';
import { TabNavigator, StackNavigator ,DrawerNavigator} from 'react-navigation';
import GioiThieu from './Gioithieu';
import HomeScreen from './index';

export const TabAppStacks = TabNavigator({	
    Home: {
      screen: DetailHotel,
      navigationOptions: {
        tabBarLabel: 'Thông tin',
        tabBarIcon: ({ tintColor }) => <Icon name="user" size={35} color={tintColor} />,
      },
    },
    BookingIndex: {
      screen: GioiThieu,
      navigationOptions: {
        tabBarLabel: 'Giới thiệu',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  
  }, {
    initialRouteName: "Home",
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
   
  
  }
  
  );
const AppStack = StackNavigator({
   
    Detail: {
        screen: TabAppStacks,
        
    },
   	
}
,{ headerMode: 'none'});

const HomeStack = StackNavigator({
	RootScreen: {
		screen: HomeScreen,
    },
 
 
    Detail: {
      screen: AppStack,
      
  },
   	
},{ headerMode: 'none'});

export default HomeStack
