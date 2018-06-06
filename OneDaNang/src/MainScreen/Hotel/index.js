import React, { Component } from 'react';   
import {
  Text,
  View,
  ScrollView,
  TextInput,StyleSheet, TouchableOpacity,Image
  
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {HotelData} from '../../../data/datahotel';
import ApiHotel from '../../../data/apiHotel';
datago  =[];
class Index  extends Component {
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
  onLearnMore = (data) => {
    this.setState({
      id:data.id
    })
   this.props.navigation.navigate('Detail', { ...this.state.data });
  };
  fetchdata = async () => {
    const reponse = await fetch("http://api.onedanang.vn/api/ApiHotel/Hotel/12");
    const json = await reponse.json()
    this.setState({
        data : json.model, 
        str : json.model.imagePath.replace("~", "http://onedanang.vn")    
    })
}
componentDidMount() {
    this.fetchdata()
}
  render() {
    return (
      <View>
      <ScrollView>
       
        <TouchableOpacity onPress={() => this.onLearnMore(this.state.data)}>
   
        <View style={{
                flex:1,
                flexDirection:'column',
                marginTop:10,
                backgroundColor:'rgb(98,197,184)',flexDirection: 'row'}}  >
              
                    <Image
                style={{width: 50, height: 50}}
                source={{uri:this.state.str}}
                />
             <View style={{flexDirection: 'column'}}>
                <Text style={{
                    fontSize:16,
                    
                    fontWeight:'bold',
                    color:'rgb(173,252,250)',
                    marginLeft:20,
                    marginRight:10
                 }} >{this.state.data.hotelName}
                </Text>
                <Text style={{
                    fontSize:13,
                    fontWeight:'bold',
                    color:'rgb(173,252,250)',
                    marginLeft:20,
                    marginRight:10
                 }} >{this.state.data.address}
                </Text>              
                </View> 
            </View>
        </TouchableOpacity>
        
      </ScrollView>
      </View>
    );
  }
}

export default Index ;
