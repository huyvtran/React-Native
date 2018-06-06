
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import LoginScreen from './Login/Form';
import App from './MainScreen/index';
import Menu from './Menu/menu';
import Support from './Login/Support';
import { TabNavigator, StackNavigator ,DrawerNavigator} from 'react-navigation';
import AccountIndex from './MainScreen/Account/index';
import BookingIndex from './MainScreen/Booking/index';
import HotelRoom  from './MainScreen/Hotel/index';
import DetailHotel from './MainScreen/Hotel/DetailHotel';
import HotelRoom1  from './MainScreen/HotelRoom/index';
import HotelRoute from './MainScreen/Hotel/route';
import UserList from './Users/ShowUsers';
import DetailUser from './Users/index';
export const TabAppStacks = TabNavigator({	
	  Home: {
		screen: App,
		navigationOptions: {
		  tabBarLabel: 'Home',
		  tabBarIcon: ({ tintColor }) => <Icon name="user" size={35} color={tintColor} />,
		},
	  },
	  BookingIndex: {
		screen: BookingIndex,
		navigationOptions: {
		  tabBarLabel: 'Booking',
		  tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
		},
	  },
	  AccountIndex: {
		screen: AccountIndex,
		navigationOptions: {
		  tabBarLabel: 'Account',
		  tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
		},
	  },	
	}, {
	  initialRouteName: "Home",
	  tabBarPosition: "bottom",
	  swipeEnabled: true,
	  animationEnabled: true,
	  lazy: true,
	 
	
	}
	
	);
const AppStack = StackNavigator({
   
    UserScreen: {
        screen: HotelRoute,
        
    },
   	
}
);
const MenuScreen = StackNavigator({
	
	UserList:{
		screen:UserList,
	},
	DetailUser:{
		screen:DetailUser,
	},
	HotelRoom: {
		 screen: HotelRoom,
		 
	 },
	 Details: {
    screen: DetailHotel,
			navigationOptions: ({ navigation }) => ({
				title: `${navigation.state.params.hotelName}`,
			}),
	},
	HotelRoom1: {
		screen: HotelRoom1,
		
	},
		
 }
 );
const DrawerStack = DrawerNavigator({
	DrawerScreen: { screen: AppStack }	
},{
	initialRouteName: 'DrawerScreen',
	drawerWidth: 300,
	headerMode: 'none',
	drawerPosition: 'left',
	contentComponent: props => <Menu {...props} />,
});

const HomeStack = StackNavigator({
	
	MenuScreen: {
		screen: MenuScreen,
	},
	HomeScreen: {
		screen: LoginScreen,
	},
	RootScreen: {
		screen:AppStack,
    },


	Support: {
		screen: Support,
	},	
	
   	
},{ headerMode: 'none'});

export default HomeStack
