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
import DropdownMenu from 'react-native-dropdown-menu';
import Menu from './menu/menu.js'
class Index extends Component {   
    constructor(props) {
        super(props)
        this.state = { data:[],report:null}
    }
   
    fetchdata = async () => {
        const reponse = await fetch("http://onesystemadmin.azurewebsites.net/api/user/areas/thamdv96@gmail.com");
        const json = await reponse.json();
        
        for (let index = 0; index < json.model.myRoles.length; index++) {
           if(json.model.myRoles[index].id==10)
           { 
               for (let index2 = 0; index2 < json.model.myRoles[index].myAreas.length; index2++) {
                if(json.model.myRoles[index].myAreas[index2].id==11)
                { 
                    this.setState({
                        report:"Báo cáo"
                    })
                } 
               }
           }
        }
        // this.setState({
        //     data : json.model.myRoles,     
        // })
       
      
    }
    _actionSelect(res){
        alert(this.datamenu)
    }
    componentDidMount() {
        this.fetchdata()
      
    }
	render() {
        const {token,email,datamenu}= this.props.navigation.state.params;
        var data = [["Select", "Điều hành", this.state.report]];
		return (
            <View >
             <HeaderCompoment {...this.props}/>
               
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