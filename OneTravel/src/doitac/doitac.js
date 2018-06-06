import React, { Component } from 'react';


import {
	StyleSheet,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,	Text,
} from 'react-native';
class Index extends Component {
	render() {
		return (
            <View>
                <Text>Doi tac</Text>
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