
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Menu from './menu/menu';
import MainScreen from './index';
import Login  from './Login/index';
import ChangePassword from './Login/changpass';
//menu Screen Import
import Doitac from './doitac/doitac';

import { TabNavigator, StackNavigator ,DrawerNavigator} from 'react-navigation';
export const TabAppStacks = TabNavigator({	
	  Home: {
		screen: MainScreen,
		navigationOptions: {
		  tabBarLabel: 'Home',
		},
	  },
	}, {
	  initialRouteName: "Home",
	  tabBarPosition: "bottom",
	  swipeEnabled: true,
	  animationEnabled: true,
	  lazy: true,
	  tabBarOptions: {
		tinColor: '#fff',
		showIcon: true,
		showLabel: true,
		lazyLoad: true,
		upperCaseLabel: false,
		indicatorStyle: {
		backgroundColor: 'transparent'
		},
		style: {
		backgroundColor: '#2a3e4c',
		height:50,
		padding: 0,
		margin: 0,
		borderTopWidth: 1,
		borderTopColor: '#996600'
		},
		labelStyle: {
		fontSize: 12,
		marginTop:-20
		},
		tabStyle : {
		backgroundColor: 'transparent'
		}
		},
	},
	
	);
// const AppStack = StackNavigator({
//     UserScreen: {
//         screen: TabAppStacks,
//     },
// }
// );
const DrawerStack = DrawerNavigator({
	DrawerScreen: { screen: TabAppStacks },	
	MenuScreen: { screen: Doitac },		
	ChangePassword:{
		screen:ChangePassword
	}
},{
	initialRouteName: 'DrawerScreen',
	drawerWidth: 250,
	headerMode: 'none',
	drawerPosition: 'left',
	contentComponent: props => <Menu {...props} />,
});


const MenuScreen = StackNavigator({
    Doitac: {
        screen: Doitac,
    },
}
);
const HomeStack = StackNavigator({
	OneTravel:{screen:Login
	},	
	HomeScreen: {
		screen: DrawerStack ,
	},
},{ headerMode: 'none'
});


export default HomeStack
