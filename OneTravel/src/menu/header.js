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
import Icon from 'react-native-vector-icons/FontAwesome';

class Index extends Component {   
    static navigationOptions = ({ navigation, screenProps }) => ({      
        headerTitleStyle: { color: '#fff', fontSize: 15, },
        headerStyle: { height :70 },
    });
    
	render() {
        const {navigate}= this.props.navigation;
        var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
		return (
            <View style={{ backgroundColor: 'white', fontSize: 15, paddingBottom:15}}>				
            <TouchableOpacity onPress={() => { navigate('DrawerOpen') }}>
            <Icon name='list'  size={24} style={{marginLeft:10, marginTop:10}}/>
            </TouchableOpacity>
			<Text style={styles.text}>Welcome to OneDaNang Admin</Text>
         
			</View>
        ); 
          
	}
}

const styles = StyleSheet.create({
    text:{
        marginLeft:100,
        marginTop:-25,
        fontWeight: 'bold',
    },
           logo: {
               width: 40,
               height: 40,
               marginLeft: 8,
           },
       
});
export default Index;