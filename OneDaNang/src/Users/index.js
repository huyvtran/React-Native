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
	state = { selectedFruits: [] }
 
  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }
  onDelete(){
	  alert(this.state.id);
		fetch("http://onesystemadmin.azurewebsites.net/api/user"+id,{
			 method:'DELETE',
		 }).then(function(res){ console.log(res) }).catch(function(res){ console.log(res) });
  }
	

	render() {
		const {id,fullName,email,phone,userIdentifier,userCode,address,avatar}= this.props.navigation.state.params;
		this.setState({
			id : id,
		})
		return (
			<ScrollView>
			<Text style={{textAlign:'center',fontSize:20,fontFamily:'vincHand',color:'lightblue',fontWeight: 'bold'}}>ADMIN Users</Text>
            <View style={{ marginTop:10,marginLeft:10,marginRight:10}}>
				<Text style={{fontSize:18 , marginBottom :-15}}>Name</Text>
				<List>
                <TextInput 				
				placeholder={fullName}	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.vHotelName = el; }}
				// onChangeText={(vHotelName) => this.setState({vHotelName})}
					>
				
     
				</TextInput>
				</List>
				  <Text style={{fontSize:18 , marginBottom :-15}}>Email</Text>
				  <List>
                <TextInput 				
				placeholder={email}	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.vHotelName = el; }}
				// onChangeText={(vHotelName) => this.setState({vHotelName})}
					>
			
				
     
				</TextInput>
				</List>
			
				  <Text style={{fontSize:18 , marginBottom :-15}}>Phone</Text>
				  <List>
                <TextInput 				
				placeholder={phone}	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15}}
				ref= {(el) => { this.vHotelName = el; }}
				// onChangeText={(vHotelName) => this.setState({vHotelName})}
					>
			
				
     
				</TextInput>
				</List>
				<Text style={{fontSize:18 , marginBottom :-15}}>Address</Text>
				  <List>
                <TextInput 				
				placeholder={address}	
				underlineColorAndroid={'transparent'}
				style={{marginRight:20,marginTop:-15,}}
			
				ref= {(el) => { this.vHotelName = el; }}
				// onChangeText={(vHotelName) => this.setState({vHotelName})}
					>
				</TextInput>
				</List>
					 
						 <View style={{marginTop:2}}>
								<SelectMultiple
									items={fruits}
									selectedItems={this.state.selectedFruits}
									onSelectionsChange={this.onSelectionsChange} />
							</View>
					
		<TouchableOpacity  onPress={this.onDelete}>
                <Text> Xóa </Text>
        </TouchableOpacity>
         </View>
		 <TouchableOpacity  >
                <Text> Luu </Text>
        </TouchableOpacity>
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
       
});
export default Index;