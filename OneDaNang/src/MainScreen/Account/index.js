import React, { Component } from 'react';

import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,AppRegistry,	Text,
	Animated,
	Easing,
	ListView,
	ScrollView,
	Alert,TextInput,rowData,checkAvailability, AsyncStorage,
} from 'react-native';
import logoImg from '../../Login/images/logo.png';
class Index extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({      
        headerTitleStyle: { color: '#fff', fontSize: 15, },
        headerStyle: { height :70 },
		headerLeft:
			<View>				
            <TouchableOpacity onPress={() => { navigation.navigate('DrawerOpen') }}>
                <Image style={styles.logo} source={{ uri: 'http://zura.vn/images/taxes-menu-icon.png' }} />
            </TouchableOpacity>
			<Text style={styles.text}>Welcome to OneDaNang Admin</Text>
			</View>

    });
	render() {
		return (
            <View>
                <Text>Account Screen</Text>
           </View>
        )			;
          
	}
}
const styles = StyleSheet.create({
    text:{
        marginLeft:100,
        marginTop:-30,
        fontWeight: 'bold',
    },
           logo: {
               width: 40,
               height: 40,
               marginLeft: 8,
       
           },
       
});

export default Index;