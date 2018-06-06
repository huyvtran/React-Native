import React, { Component, PropTypes } from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';


import logoImg from './images/logo.png';

export default class LoginScreen extends Component {
	render() {
		return 	(
            <View  style={styles.container}>
            <Image source={logoImg} style={styles.image2} />
            
                <Text style={styles.text}>
                 LIÊN HỆ:
                 DU LỊCH ONE ĐÀ NẴNG                   
                </Text>
                <Text style={styles.text}>  
                Công ty TNHH Truyền thông và Công nghệ One Office .
                    Số ĐKKD: 0401590275. Cấp ngày: 10/03/2014. Nơi cấp: Sở KHĐT TP Đà Nẵng
                    127 Huỳnh Thúc Kháng, Quận Hải Châu, Đà Nẵng
                    </Text>
                </View>
        )		
	
	}
}
const styles = StyleSheet.create({ 
	container: {
     
		flex: 1,
        backgroundColor:'white',
        alignItems: 'center',
    },
    text:{
        marginTop: 50,
    }
});