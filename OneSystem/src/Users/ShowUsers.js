import React, { Component } from 'react';   
import {
  Text,
  View,
  ScrollView,
  TextInput,StyleSheet, TouchableOpacity,Image,SectionList,
  Alert,FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
datago  =[];
import HeaderCompoment from '../menu/header';
import Swipeout from  'react-native-swipeout';
import {Detail} from './index';

  class  FlatListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    key:''
    }
  }

  onReMove(ids,deleteRow){
    const JSON =  fetch("http://onesystemadmin.azurewebsites.net/api/user/"+ids,{
      method:'DELETE',
    }).then(function(res){
       data:  JSON.stringify(ids);
       })
     
     this.props.parentFlatlist.refresh()
    }
  render(){

    const swipeSettings={
      autoClose:true,
      onClose:()=>{
      },
      onOpen:()=>{
          this.setState({
            key :this.props.item.id
          })
      },
      right:[
        {
          onPress:()=>{
            const deleteRow= this.state.key;
            Alert.alert(
              'Xóa user',
              'Bạn có muốn tiếp tục?',
              [
                {text: 'Hủy bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Tiếp tục', onPress: () =>  this.onReMove(this.state.key,deleteRow)},
              ],
              { cancelable: false }
              )
          },text:'Xóa',type:'delete'
        },
        {
          onPress:()=>{
            this.props.parentFlatlist.onLearnMore(this.props.item)
          },text:'Sửa',type:'edit'
        }
      ],
  
    }
   
    return (
      <Swipeout {...swipeSettings}>
      <TouchableOpacity   onPress={() => this.props.parentFlatlist.onLearnMore(this.props.item)}>
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
             }} >{this.props.item.email}
            </Text>
            <Text style={{
                fontSize:13,
                marginLeft:20,
                marginRight:10
             }} >{this.props.item.fullName}
            </Text>              
            </View> 
        </View>
        </TouchableOpacity>
        </Swipeout>
    )
  }

}
class ShowUsers  extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        data :[] ,
        isLoading: true,
        refreshing: true,
        str:'2',
        id:[],
        key:[],
        rowdeletekey:null
    })
  }
  onLearnMore = (item) => {  
    this.props.navigation.navigate('UserManage', { ...item });
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

 refeshFlatlist = (deletedKey)=>{
    this.setState((prevState)=>{
      return{
        rowdeletekey:deletedKey
      }
    })
 }
 refresh(){
  this.props.navigation.navigate('ShowUsers');
 }
  render() {

    return (
      <View>
          <HeaderCompoment {...this.props}/>
      <ScrollView>      
      <FlatList
        data={this.state.data}
        keyExtractor={this.state.data.id}
        renderItem={({item,index})=>{
          return(
            <FlatListItem item={item} index={index} parentFlatlist={this}>
            </FlatListItem>)
        }}  
      />
      </ScrollView>
      </View>
    );
  }
}

export default ShowUsers ;
