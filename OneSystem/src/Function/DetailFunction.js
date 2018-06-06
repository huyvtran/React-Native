import React, { Component } from 'react';
import CheckBox from 'react-native-check-box';
import { Dropdown } from 'react-native-material-dropdown';
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
	state = { 
		data:[],
		vfullName:'',vemail:'',vphone:'',vuserIdentifier:'',vuserCode:'',vaddress:'',
		vavatar :'',visAccFacebook:false,visAccGoogle:false,visAccTwitter:false,visAccOutlook:false,visActive:true,
		error:'Lưu',
		listdata:[]
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
  
  onUpdate(){
	
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
  fetchdata = async () => {
    const reponse = await fetch("http://onesystemadmin.azurewebsites.net/api/area");
    const json = await reponse.json();
	for (let index = 0; index < json.model.length; index++) {
		this.setState({
			listdata : listdata +json.model[index].areaName,     
		})	
	}
	alert("this.state.listdata[0]")
	}
	componentDidMount() {
		this.fetchdata()
	}
	
	render() {
	
		return (
			<ScrollView>
			<Text style={{textAlign:'center',fontSize:20,fontFamily:'vincHand',color:'lightblue',fontWeight: 'bold'}}>ADMIN Users</Text>
            <View style={{ marginTop:10,marginLeft:10,	marginRight:10}}>
			
				  <Text style={{fontSize:18 , marginBottom :-15}}>AREA</Text>
				<Dropdown
				label={this.state.data.areaName}
				data={this.state.data}
				>
				
				</Dropdown>
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