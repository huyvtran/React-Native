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
		vfullName:'',vemail:'',vphone:'',vuserIdentifier:'',vuserCode:'',vaddress:'',
		vavatar :'',visAccFacebook:false,visAccGoogle:false,visAccTwitter:false,visAccOutlook:false,visActive:true,
		error:'Lưu'
	}
 
  onSelectionsChange = (selectedFruits) => {
    this.setState({ selectedFruits })
  }
  onDelete(ids){
	Alert.alert(
		'Xóa user',
		'Bạn có muốn tiếp tục ?',
		[
		
		  {text: 'Hủy bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		  {text: 'Tiếp tục', onPress: () => this.onReMove(ids)},
		],
		{ cancelable: false }
	  )
	
  }
  onReMove(ids){
	const JSON =  fetch("http://onesystemadmin.azurewebsites.net/api/user/"+ids,{
		method:'DELETE',
	}).then(function(res){
	   data:  JSON.stringify(ids);
		 })
		 this.props.navigation.navigate('ShowUsers');
  }
  
  onUpdate(id,email,phone,fullName,address,isAccFacebook,isAccGoogle,isAccTwitter,isAccOutlook,isActive){
	let emails= this.state.vemail
	let phones= this.state.vphone
	let fullNames= this.state.vfullName
	let addresss= this.state.vaddress
	let isAccFacebooks= this.state.visAccFacebook
	let isAccGoogles= this.state.visAccGoogle
	let isAccTwitters= this.state.visAccTwitter
	let isAccOutlooks= this.state.visAccOutlook
	let isActives= this.state.visActive
	if(this.state.vemail==''){emails =email}
	if(this.state.vphone==''){phones =phone}
	if(this.state.vfullName==''){fullNames =fullName}
	if(this.state.vaddress==''){addresss =address}
	var datas={
			"userInfo": {
				"email":emails,
				"phone": phones,	
				"fullName": fullNames,
				"isAccFacebook": this.state.visAccFacebook,
				"isAccGoogle":  this.state.visAccGoogle,
				"isAccTwitter":  this.state.visAccTwitter,
				"isAccOutlook":  this.state.visAccOutlook,
				"isActive":  this.state.visActive,
				"userIdentifier": "string",
				"userCode": "string",
				"confirmPassword": "string",
				"isConfirm": true,
				"isMember": true,
				"isPartner": true,
				"isAdmin": true,
				"address": addresss,
				"questionCode": "string",
				"questionAnswer": "string"
			  },
			}
			this.setState({
				error:'Lưu thành công'
			})
			setTimeout(() => {
				this.onBack();}, 1000);
		
			return	  fetch('http://onesystemadmin.azurewebsites.net/api/user/'+id, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(datas),			
			})
  }
  onBack(){
	const {navigation} = this.props;
	navigation.navigate('ShowUsers');
  }

	render() {
		const {id,fullName,email,phone,userIdentifier,userCode,address,avatar,
			isAccFacebook,isAccGoogle,isAccTwitter,isAccOutlook,isActive
		}= this.props.navigation.state.params;
		return (
			<ScrollView>
			<Text style={{textAlign:'center',fontSize:20,fontFamily:'vincHand',color:'lightblue',fontWeight: 'bold'}}>ADMIN Users</Text>
            <View style={{ marginTop:10,marginLeft:10,marginRight:10}}>
				<Text style={{fontSize:18 , marginBottom :-15}}>Name</Text>
				<List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.vfullName = el; }}
		
				onChangeText={(vfullName) => this.setState({vfullName})}
					>
				
				<Text>{fullName}</Text>
				</TextInput>
				</List>
				  <Text style={{fontSize:18 , marginBottom :-15}}>Email</Text>
				  <List>
                <TextInput 		
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.vemail = el; }}
				 onChangeText={(vemail) => this.setState({vemail})}
					>
					<Text>{email}</Text>
				</TextInput>
				</List>
				  <Text style={{fontSize:18 , marginBottom :-15}}>Phone</Text>
				  <List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.vphone = el; }}
				 onChangeText={(vphone) => this.setState({vphone})}	>
					<Text>{phone}</Text>
				</TextInput>
				</List>
				<Text style={{fontSize:18 , marginBottom :-15}}>Address</Text>
				  <List>
                <TextInput 		
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15,}}
				ref= {(el) => { this.vaddress = el; }}
				onChangeText={(vaddress) => this.setState({vaddress})}
					><Text>{address}</Text>
				</TextInput>
				</List>
					 
						 <View style={{marginTop:2}}>
						 <CheckBox
								style={{flex: 1, padding: 10}}
								onClick={() => this.setState({visAccFacebook: !isAccFacebook})}
								isChecked={isAccFacebook}
								leftText={'isAccFacebook'}
							/>
							 <CheckBox
								style={{flex: 1, padding: 10}}
								onClick={() => this.setState({visAccGoogle:!isAccGoogle})}
								isChecked={isAccGoogle}
								leftText={'isAccGoogle'}
							/>
							 <CheckBox
								style={{flex: 1, padding: 10}}
								onClick={() => this.setState({visAccTwitter:!isAccTwitter})}
								isChecked={isAccTwitter}
								leftText={'isAccTwitter'}
							/>
							 <CheckBox
								style={{flex: 1, padding: 10}}
								onClick={() => this.setState({visAccOutlook:!isAccOutlook})}
								isChecked={isAccOutlook}
								leftText={'isAccOutlook'}
							/>
							 <CheckBox
								style={{flex: 1, padding: 10}}
								onClick={() => this.setState({visActive:!isActive})}
								isChecked={isActive}
								leftText={'isActive'}
							/>
							</View>
		<View style={{
                flex:1,              
               flexDirection: 'row',
               justifyContent: 'center',
               marginTop:20,
               marginBottom:20}}  >	
		<TouchableOpacity  onPress={()=>this.onDelete(id)} style={styles.button}>
                <Text> Xóa </Text>
        </TouchableOpacity>
        
		 <TouchableOpacity  style={styles.button2} onPress={()=>this.onUpdate(id,email,phone,fullName,address,isAccFacebook,isAccGoogle,isAccTwitter,isAccOutlook,isActive)}>
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