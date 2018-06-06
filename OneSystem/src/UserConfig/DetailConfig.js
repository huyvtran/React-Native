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
	Alert,TextInput,rowData,checkAvailability, AsyncStorage
} from 'react-native';
import { Tile, List, ListItem, } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
const fruits = ['IsAccFaceBook', 'IsAccTwitter', 'IsAccGoogle', 'IsAccOutlook', 'IsConfirm', 'IsMember', 'IsPartner', 'IsAdmin'];

class Index extends Component {   
	state = { selectedFruits: [],
		data:[],
		apiCode:'',apiKey:'',description:'',
		error:'Lưu'
	}
 
  onSelectionsChange = (selectedFruits) => {
    this.setState({ selectedFruits })
  }
  onDelete(ids){

	  const JSON =  fetch("http://onesystemadmin.azurewebsites.net/api/userconfig/"+ids,{
			 method:'DELETE',
		 }).then(function(res){
			data:  JSON.stringify(ids);
			  }).catch(function(res){ alert('Ok') });
			  this.props.navigation.navigate('ShowConfig');
  }
  
  onUpdate(ids,apiCodes,apiKeys,descriptions){
    let apicodes= this.state.apiCode
      if(this.state.apiCode=='') {apicodes =apiCodes}
     
    let apikey= this.state.apiKey
    if(this.state.apiKey=='')
    {
        apikey =apiKeys
    }
    let des= this.state.description
    if(this.state.description=='')
    {
        des =descriptions
    }
    
	var datas={
        "apiCode": apicodes,
        "apiKey": apikey,
		"description": des,
			}
			this.setState({
				error:'Lưu thành công'
			})
			setTimeout(() => {
				this.onBack();}, 1000);
		
			return	  fetch('http://onesystemadmin.azurewebsites.net/api/userconfig/'+ids, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(datas),
			});
   
  }
  onBack(){
	const {navigation} = this.props;
	navigation.navigate('ShowConfig');
  }

	render() {
        const {id,apiCode,apiKey,description}= this.props.navigation.state.params;
		return (
			<ScrollView>
			<Text style={{textAlign:'center',fontSize:20,fontFamily:'vincHand',color:'lightblue',fontWeight: 'bold'}}>ADMIN Users</Text>
            <View style={{ marginTop:10,marginLeft:10,marginRight:10}}>
				<Text style={{fontSize:18 , marginBottom :-15}}>apiCode</Text>
				<List>
                <TextInput 	
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                returnKeyType={'done'}
                placeholder={apiCode}
				style={styles.textinput}
				ref= {(el) => { this.codeRole = el; }}
                onChangeText={(apiCode) => this.setState({apiCode})}
                value={this.state.apiCode}
					>
                   
				</TextInput>
				</List>
				<Text style={{fontSize:18 , marginBottom :-15}}>apiKey</Text>
				<List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={styles.textinput}
				ref= {(el) => { this.apiKey = el; }}
		
				onChangeText={(apiKey) => this.setState({apiKey})}
					>
				
				<Text>{apiKey}</Text>
				</TextInput>
				</List>
				<Text style={{fontSize:18 , marginBottom :-15}}>description</Text>
				<List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={styles.textinput}
				ref= {(el) => { this.description = el; }}
		
				onChangeText={(description) => this.setState({description})}
					>
				
				<Text>{description}</Text>
				</TextInput>
				</List>
                

		<View style={{
                flex:1,              
               flexDirection: 'row',
               justifyContent: 'center',
               marginTop:20,
               marginBottom:20}}  >	
		<TouchableOpacity  onPress={()=>this.onDelete(id)} style={styles.button}>
                <Text> Xóa </Text>
        </TouchableOpacity>
        
		 <TouchableOpacity  style={styles.button2} onPress={()=>this.onUpdate(id,apiCode,apiKey,description)}>
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
			textinput:{
				
				
				borderRadius: 5,
				
				fontSize: 14,
				height: 40,
				paddingHorizontal: 5,
				width: 260				
			}
       
});
export default Index;