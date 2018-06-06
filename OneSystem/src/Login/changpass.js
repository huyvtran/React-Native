
import React, { Component } from 'react';
import CheckBox from 'react-native-check-box'
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
	Alert,TextInput,rowData,checkAvailability, AsyncStorage
} from 'react-native';
import { Tile, List, ListItem, } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
const fruits = ['IsAccFaceBook', 'IsAccTwitter', 'IsAccGoogle', 'IsAccOutlook', 'IsConfirm', 'IsMember', 'IsPartner', 'IsAdmin'];
class Index extends Component {   
	state = { selectedFruits: [],
		data:[],
        oldPassword:'',
        newPassword:'',
        error:'Lưu',
        errorMessage:'no error'
	}
  onUpdate(){
      if(this.state.newPassword.length<6)
      {
          this.setState({
              errorMessage : 'Bạn phải nhập độ dài mật khẩu ít nhất 6 ký tự'
          })
      }
      else{
        var datas={
            "oldPassword": this.state.oldPassword,
            "newPassword": this.state.newPassword,
        }
        this.setState({
            error:'Lưu thành công'
        })
        setTimeout(() => {
            this.onBack();}, 1000);
    
        return	 fetch('http://onesystemadmin.azurewebsites.net/api/user/password/change?id=73', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datas),
            }).then(res=>res.json()).then(res => {
                if(res.didError==false)
                {
                  
                }
                else{
                    alert(res.errorMessage)
                }
            });
      }
	
  }
  onBack(){
	const {navigation} = this.props;
	navigation.navigate('HomeScreen');
  }

	render() {

		return (
			<ScrollView>
			<Text style={{textAlign:'center',fontSize:20,fontFamily:'vincHand',color:'lightblue',fontWeight: 'bold'}}>ADMIN change Password</Text>
            <View style={{ marginTop:10,marginLeft:10,marginRight:10}}>
				<Text style={{fontSize:18 , marginBottom :-15}}>Old Password</Text>
				<List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
                ref= {(el) => { this.oldPassword = el; }}
                secureTextEntry={true}
				onChangeText={(oldPassword) => this.setState({oldPassword})}
					>
			
				</TextInput>
             
				</List>
                <Text>{this.state.errorMessage}</Text>
				  <Text style={{fontSize:18 , marginBottom :-15}}>New Password</Text>
				  <List>
                <TextInput 		
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
                ref= {(el) => { this.newPassword = el; }}
                secureTextEntry={true}
                
				 onChangeText={(newPassword) => this.setState({newPassword})}
					>
					
				</TextInput>
				</List>
		<View style={{
                flex:1,              
               flexDirection: 'row',
               justifyContent: 'center',
               marginTop:20,
               marginBottom:20}}  >	
	
		 <TouchableOpacity  style={styles.button2} onPress={()=>this.onUpdate()}>
		 	<Text>{this.state.error}</Text>
        </TouchableOpacity>
		<TouchableOpacity  style={styles.button2} onPress={()=>this.onBack()}>
                <Text> Quay lại </Text>
        </TouchableOpacity>
		
		</View>
		</View>
	</ScrollView>
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
		 
			button: {
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: "#FF3366",
				height: 40,
				borderRadius: 5,
				width:100,
			  zIndex: 100,
			  marginRight:10,
			},
			button2: {
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'green',
				height: 40,
				borderRadius: 5,
				width:100,
			  zIndex: 100,
			  marginRight:10,
			},
       
});
export default Index;