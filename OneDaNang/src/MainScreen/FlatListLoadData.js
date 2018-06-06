import React, { Component } from 'react';
import {AppRegistry,SectionList,StyleSheet,Text,View,Alert,Platform, Image, TouchableOpacity} from 'react-native';
import  {FlatListData} from '../../data/FlatListData';


class SelectListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
                showPass: true,
                press: false,
                isLoading: true,
                username:'',
                password:'',
            };

            this._onPress = this._onPress.bind(this);
            
        }
    _onPress(){
       
    }
    render (){
        return(
            <View style={{
                flex:1,flexDirection:'column',
                marginTop:10,
                backgroundColor:'rgb(98,197,184)',flexDirection: 'row'}}  >
              
                    <Image
                style={{width: 50, height: 50}}
                source={{uri:this.props.item.Img}}
                />
             <View style={{flexDirection: 'column'}}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'rgb(173,252,250)',
                    marginLeft:20,
                    marginRight:10
                 }} >{this.props.item.Name}
                </Text>
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'rgb(173,252,250)',
                    marginLeft:20,
                    marginRight:10
                 }} >{this.props.item.Price}
                </Text>              
                </View> 
            </View>
 
        );
    }
}
class SectionHeader extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'column',
                marginTop:10,
           
                backgroundColor:'rgb(77,120,140)',}}  >
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'rgb(173,252,250)',
                    marginLeft:20,
                    marginRight:10
                 }} >{this.props.section.title}
                </Text>
         
            
            </View>
        )
    }
}
 class FlatListLoadData extends Component {

    render(){
        return (
            <View style={{flex:1 }}>
                <SectionList
                    renderItem={({item, index})=>{
                        return( 
                                <SelectListItem item={item} index ={index}>
                                </SelectListItem>
                                )
                    }}
                    renderSectionHeader={({section})=>{
                        return(<SectionHeader section={section}/>)
                    }}
                     sections ={FlatListData}
                     keyExtractor ={(item,index)=>item.Name}
                >
              
                </SectionList>
            </View>
        );
    }
}
export default FlatListLoadData;