
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Menu from './menu/menu';
import MainScreen from './index';
import UserManage from './Users/index';
import ShowUsers from './Users/ShowUsers';
import ShowRole from './Roles/index';
import RoleManage from './Roles/DetailRole';
import ShowConfig from './UserConfig/index';
import ConfigManage from './UserConfig/DetailConfig';
import Login  from './Login/index';
import ShowFunction from './Function/index';
import FunctionManage from './Function/DetailFunction';
import ChangePassword from './Login/changpass';
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
		//backgroundColor: '#cc9933',
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
const AppStack = StackNavigator({
    UserScreen: {
        screen: TabAppStacks,
    },
}
);
const RoleGroup = StackNavigator({
	ShowRole: {
		screen: ShowRole,
	},	
	RoleManage: {
		screen: RoleManage,
		navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.codeRole}`,
    }),
	},
 },{headerMode: 'none',}
 );
 const ConfigGroup = StackNavigator({
	ShowConfig: {
		screen: ShowConfig,
	},	
	ConfigManage: {
		screen: ConfigManage,
		navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.apiCode}`,
    }),
	},
 },{headerMode: 'none',}
 );

 const FunctionGroup = StackNavigator({
	ShowFunction: {
		screen: ShowFunction,
	},	
	FunctionManage: {
		screen: FunctionManage,
		navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.apiCode}`,
    }),
	},
 },{headerMode: 'none',}
 );
const DrawerStack = DrawerNavigator({
	DrawerScreen: { screen: TabAppStacks },		
	ConfigGroup: {
		screen: ConfigGroup,
	},
	RoleGroup:{
		screen: RoleGroup,
	},
	UserGroup: {
		screen: UserGroup,
	},
	FunctionGroup:{
		screen: FunctionGroup
	},
	ChangePassword:{
		screen:ChangePassword
	}
},{
	initialRouteName: 'FunctionGroup',
	drawerWidth: 250,
	headerMode: 'none',
	drawerPosition: 'left',
	contentComponent: props => <Menu {...props} />,
});

const HomeStack = StackNavigator({

	HomeScreen: {
		screen: DrawerStack ,
	},
	Login:{screen:Login},	

},{ headerMode: 'none'
});

export default HomeStack
