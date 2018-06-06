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
import HeaderCompoment from './menu/header';
class Index extends Component {   
    
	render() {

		return (
            <View >
             <HeaderCompoment {...this.props}/>
                <Text style={{textAlign:'center'}}>One DaNang  </Text>
           </View>
        ); 
          
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