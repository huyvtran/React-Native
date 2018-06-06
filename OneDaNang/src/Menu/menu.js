import React, {Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,ScrollView} from 'react-native';
import logoImg from '../Login/images/logo.png';
const remote = 'https://d3tosvr3yotk6r.cloudfront.net/Content/Public/images/logo-onedanang-web-v2.png';
export default class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {    
            };      
            this._onPress = this._onPress.bind(this);            
        }
 
    _onPress(){
     
      this.props.navigation.navigate('HomeScreen');
     
    }
    
    render(){
     
        return(
            <ScrollView>
                <View style={Styles.conterner}>
                    
                    {/* <Text style={Styles.titlemenu}>Menu</Text> */}
                   
                        <Image
                            style={{
                            backgroundColor: '#ccc',
                            flex: 1,
                      
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            }}
                            source={{ uri: remote }}
                        >
                            <Text
                            style={{
                                backgroundColor: 'transparent',
                                textAlign: 'center',
                                fontSize: 30,
                                padding: 40,
                            }}
                            >
                           Menu
                            </Text>
                        </Image>
                </View>
                
                    <View>
                        
                        <TouchableOpacity 
                            style={Styles.click}>
                            <Text style={Styles.textclick} >Trang chủ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HotelRoom')}   style={Styles.click}>
                        <Text style={Styles.textclick} >Khách Sạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HotelRoom1')}   style={Styles.click}>
                        <Text style={Styles.textclick} >Phòng khách sạn </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={Styles.click} onPress={()=>this.props.navigation.navigate('UserList')}>
                        <Text style={Styles.textclick} >User </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={Styles.click}>
                        <Text style={Styles.textclick} >Khuyến mãi </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={Styles.click}>
                        <Text style={Styles.textclick} >Đánh giá khách sạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPress} 
                         style={Styles.click}>
                        <Text style={Styles.textclick} >Log Out</Text>
                        </TouchableOpacity>
                      
                    </View>
                </ScrollView>

           
        );

        
    }
}
const Styles=StyleSheet.create({
    conterner:{
        height:35,
        backgroundColor: 'lightgray',

       
    },
    logo: {
        
        width: 70, 
        height: 70,
        marginLeft: 120,
        
        
    },
    titlemenu:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color:'#fff',
        paddingLeft:20,
        marginTop:5,
    },
    click:{
        height:50,
        width:'100%',
        borderColor: '#800000',
        borderBottomWidth: 1,
     
        

    },
    textclick:{
        textAlign:'center',
        paddingTop:15
    },
    image2:{
        width :70,
        height:70,
    }
});