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
		codeRole:'',roleName:'',description:''
	}
 
  onSelectionsChange = (selectedFruits) => {
    this.setState({ selectedFruits })
  }
  onDelete(ids){

	return	  fetch('http://onesystemadmin.azurewebsites.net/api/role/'+ids, {
			 method:'DELETE',
		 }).then(function(res){
			data:  JSON.stringify(ids);
			  }).catch(function(res){ alert('Ok') });
			  this.props.navigation.navigate('ShowRole');
  }
  
  onUpdate(ids,descriptions,rolenames,codeRoles){
    let codeRole= this.state.codeRole
      if(this.state.codeRole=='')
      {
         codeRole =codeRoles
      }
     
    let rolename= this.state.roleName
    if(this.state.roleName=='')
    {
        rolename =rolenames
    }
    let des= this.state.description
    if(this.state.description=='')
    {
        des =descriptions
    }
 
	var datas={
        "codeRole": codeRole,
        "roleName": rolename,
        "description": des
			}
			return	  fetch('http://onesystemadmin.azurewebsites.net/api/role/'+ids, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(datas),
			});
   
  }
	render() {
        const {id,codeRole,roleName,description}= this.props.navigation.state.params;
		return (
			<ScrollView>
			<Text style={{textAlign:'center',fontSize:20,fontFamily:'vincHand',color:'lightblue',fontWeight: 'bold'}}>ADMIN Users</Text>
            <View style={{ marginTop:10,marginLeft:10,marginRight:10}}>
				<Text style={{fontSize:18 , marginBottom :-15}}>code Role</Text>
				<List>
                <TextInput 	
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                returnKeyType={'done'}
                placeholder={codeRole}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.codeRole = el; }}
                onChangeText={(codeRole) => this.setState({codeRole})}
                value={this.state.codeRole}
					>
                   
				</TextInput>
				</List>
				<Text style={{fontSize:18 , marginBottom :-15}}>role Name</Text>
				<List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.roleName = el; }}
		
				onChangeText={(roleName) => this.setState({roleName})}
					>
				
				<Text>{roleName}</Text>
				</TextInput>
				</List>
                <Text style={{fontSize:18 , marginBottom :-15}}>description</Text>
				<List>
                <TextInput 	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
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
        
		 <TouchableOpacity  style={styles.button2} onPress={()=>this.onUpdate(id,description,roleName,codeRole)}>
                <Text> Lưu </Text>
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