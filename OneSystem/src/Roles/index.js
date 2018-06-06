import React, { Component } from 'react';   
import {
  Text,
  View,
  ScrollView,
  TextInput,StyleSheet, TouchableOpacity,Image,SectionList
  
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
datago  =[];
import HeaderCompoment from '../menu/header';
class index  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data :[] ,
        isLoading: true,
        refreshing: true,
        str:'2',
        id:[]
 
    }
  }
  onLearnMore = (item) => {  
   this.props.navigation.navigate('RoleManage', { ...item });
  };
  fetchdata = async () => {
    const reponse = await fetch("http://onesystemadmin.azurewebsites.net/api/role");
    const json = await reponse.json();
    this.setState({
        data : json.model,         

    })
    
}
componentDidMount() {
    this.fetchdata()
}
  render() {
    return (
      <View>
         <HeaderCompoment {...this.props}/>
      <ScrollView>
              { this.state.data.map((item, key)=>(
      <TouchableOpacity onPress={() => this.onLearnMore(item)}>

         <View style={{
            backgroundColor: '#E8E8E8',
            height: 70,
            flexDirection: 'column',
            position: 'relative',
            paddingLeft: 5,
            marginTop:5}}  >
          
         
         <View style={{flexDirection: 'column'}}>
            <Text style={{
                fontSize:16,
                fontWeight:'bold',
                marginLeft:20,
                marginRight:10
             }} >{item.roleName}
            </Text>
            <Text style={{
                fontSize:13,
                marginLeft:20,
                marginRight:10
             }} >{item.description}
            </Text>              
            </View> 
        </View>
        </TouchableOpacity>)
         )}
      </ScrollView>
      </View>
    );
  }
}

export default index ;
