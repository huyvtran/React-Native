import React, { Component } from 'react';   
import {
  Text,
  View,
  ScrollView,
  TextInput,StyleSheet, TouchableOpacity,Image,SectionList
  
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
datago  =[];

class ShowUsers  extends Component {
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
   this.props.navigation.navigate('DetailUser', { ...item });
  };
  fetchdata = async () => {
    const reponse = await fetch("http://onesystemadmin.azurewebsites.net/api/user");
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
      <ScrollView>
              { this.state.data.map((item, key)=>(
      <TouchableOpacity onPress={() => this.onLearnMore(item)}>

         <View style={{
            flex:1,
            flexDirection:'column',
            marginTop:10,
            backgroundColor:'rgb(98,197,184)',flexDirection: 'row'}}  >
          
         
         <View style={{flexDirection: 'column'}}>
            <Text style={{
                fontSize:16,
                
                fontWeight:'bold',
                color:'rgb(173,252,250)',
                marginLeft:20,
                marginRight:10
             }} >{item.email}
            </Text>
            <Text style={{
                fontSize:13,
                color:'rgb(173,252,250)',
                marginLeft:20,
                marginRight:10
             }} >{item.fullName}
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

export default ShowUsers ;
