'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, TouchableOpacity, View, Image,Text,ScrollView,FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import DropdownMenu from 'react-native-dropdown-menu';
import {ListItem, Body,Left} from 'native-base';
let SideMenuWidth = 1000
class  FlatListItem extends React.Component{
    constructor(props) {
      super(props);
      this.state={
      key:'',
   
      }
    }
    render(){
      return (
        <TouchableOpacity   onPress={() => this.setState({
            actionid:this.props.item.id
        })}>
           <ListItem icon >               
                <Body><Text>{this.props.item.name}</Text></Body>
            </ListItem>
         </TouchableOpacity>
      )
    }
  }
  
  class  FlatListDataItem extends React.Component {
      
    constructor(props) {
      super(props);
      this.state={
      key:'',
   
      }
    }

    render(){
      return (
        <View style={{paddingLeft:20}}>
          <TouchableOpacity 
              style={styles.menu}>
            <Text style={styles.menuText}>{this.props.item.name}</Text>  
         </TouchableOpacity>
         <View    style={{flexDirection: 'row',}}>
                        <FlatList
                            data={this.props.item.childItems}
                            keyExtractor={this.props.item.childItems.id}
                            renderItem={({item,index})=>{
                            return(
                                <View style={styles.itemmenu}>
                                <Text>{this.props.item.childItems[index].name}</Text>
                                </View>
                            )
                            }}      
                        />
                </View>
                
        </View>
      )
    }
  }

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {hideRPMenu:false,report:null,hideMenu:false,databaocao:[{name:''}],status:"Vui lòng chọn vùng công việc!!",actionid:null, travel2:false, travel:false, 
             data:[],dataOperator:null, hethong: false, danhmuc: false, doitac: false, banggia: false,
              dieuhanh: false, baocao: false, cache:true}
    }  
      componentDidMount() {
        this.fetchdata()
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
                   
                    for (let index3 = 0; index3 < json.model.myRoles[index].myAreas[index2].myFunctions.length; index3++) {
                                if(json.model.myRoles[index].myAreas[index2].myFunctions[index3].id==8)
                                        { 
                                            this.setState({
                                            databaocao: json.model.myRoles[index].myAreas[index2].myFunctions[0].childItems
                                        })
                        }
                     } 
                this.setState({
                    report:"Báo cáo",
                })
               }
           }
        }
    }

    for (let index = 0; index < json.model.myRoles.length; index++) {
        if(json.model.myRoles[index].myAreas[0].id==14)
        {
                this.setState({
                    data:json.model.myRoles[index].myAreas[0].myFunctions,
                })
        }
    }
}
    _actionSelect(res){
        
        if(res=="Select")
        {
            this.setState({
                hideMenu:false,
                hideRPMenu:false,
                status:"Vui lòng chọn vùng công việc!!"
            })  
        }
        else{
            if(res=="Điều hành")
            {
                this.setState({
                    hideMenu:true,
                    status:null,
                    hideRPMenu:false,
                })  
                
            }
            else if(res== "Báo cáo")
            {
                this.setState({
                    hideMenu:false,
                    hideRPMenu:true,
                    status:null
                })  
               
            }
        }
    }
    componentDidMount() {
        this.fetchdata()
      
    }
    render() {
        const {token,email, datamenu}= this.props.navigation.state.params;
        const travel = (
  
        <View>
        <TouchableOpacity 
                style={styles.menu} onPress={() => this.setState({ travel2: !this.state.travel2 })}>
                <Icon name='check'  size={24} style={{ marginRight:10}}/><Text style={styles.textclick}>Điều khiển</Text>  
        </TouchableOpacity>
           
        </View>
    )

      
        var data = [["Select", "Điều hành", this.state.report]];
        return ( 
            <ScrollView >
       
            <DropdownMenu 
            bgColor={"red"}                            
            tintColor={"white"}                       
            selectItemColor={"red"}                    
            data={data}                                
            maxHeight={410}     
            style={{zIndex: 0}}                     
            handler={(selection, row) => this._actionSelect(data[selection][row])} >
             <View style={{ paddingHorizontal: 30 }}>
             { this._renderHeader() }
             { this._renderMenu() }
             { this._renderRPMenu() }
             
       </View> 
       </DropdownMenu>
          <Text>{this.state.status}</Text>
            </ScrollView> 
        )
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.userInfosHolder }>
                    <Image style={ styles.avatar } source={{ uri: 'http://oneoffice.com.vn/Content/UserFiles/Images/Company/Logo.png' }} /> 
                </View>
            </View>
        )
    }
    _renderMenu() {
        if (this.state.hideMenu==true) {
			return (
                <View style={{marginLeft:-25}}>
                 <FlatList
                            data={this.state.data}
                            keyExtractor={this.state.data.name}
                            renderItem={({item,index})=>{
                            return(
                                <FlatListDataItem item={item} index={index} parentFlatlist={this}>
                                </FlatListDataItem>)
                            }} 
                        /> 
                </View>
			);
		  }
        return (
            <View />
        )
    }
    _renderRPMenu() {
        
        if (this.state.hideRPMenu==true) {
			return (
                <View style={{ marginLeft:-5}}>
                <TouchableOpacity 
                style={styles.menu} >
                <Text style={styles.menuText}>Báo cáo</Text>  
               </TouchableOpacity>  
                 <View style={{   flexDirection: 'row',}}>
                        <FlatList
                            data={this.state.databaocao}
                            keyExtractor={this.state.databaocao.name}
                            renderItem={({item,index})=>{
                            return(
                                <View style={styles.itemmenu}>
                                <Text style={{marginLeft:15}}>{this.state.databaocao[index].name}</Text>    
                                </View>                    
                            )}} />
                </View>
                </View> 
			);
          }
        return (        
            <View style={ styles.header }>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: SideMenuWidth,
        backgroundColor: 'transparent'
    },
    itemmenu:{
        height:20,
        
        marginTop:10
    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        marginLeft:-20,
        borderBottomWidth: 0.3,
        borderBottomColor: 'lightgray',
    },
    menuText: {
        // fontWeight: 'bold',
        color:'lightgray'
    },
    header: {
        marginTop: 20,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 140,
        height: 37,
         zIndex:0
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700'
    }
})

module.exports = Menu
