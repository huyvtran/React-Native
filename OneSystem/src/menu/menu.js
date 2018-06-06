'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, TouchableOpacity, View, Image,Text
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


let SideMenuWidth = 1000
class Menu extends Component {

    render() {
        return (
            <View style={[styles.sideMenu, this.props.style || {}]}>

                  <View style={{ paddingHorizontal: 30 }}>
                        { this._renderHeader() }
                        <TouchableOpacity 
                            style={styles.menu} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                            
                              <Icon name='home'  size={24} style={{marginLeft:-20, marginRight:10}}/><Text style={styles.textclick}>Trang chủ</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShowUsers')}   style={styles.menu}>
                        <Icon name='user-o' size={24} style={{marginLeft:-20, marginRight:10}}/>
                        <Text style={styles.textclick} >Show Users</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShowRole')}   style={styles.menu}>
                        <Icon name='cog'  size={24} style={{marginLeft:-20, marginRight:10}}/>
                        <Text style={styles.textclick} >Role</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShowConfig')}  style={styles.menu}>
                        <Icon name='comment-o'  size={24} style={{marginLeft:-20, marginRight:10}}/>
                       <Text style={styles.textclick} >Config </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('FunctionGroup')}  style={styles.menu}>
                        <Icon name='bell-o'  size={24} style={{marginLeft:-20, marginRight:10}}/>
                        <Text style={styles.textclick} >Function </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChangePassword')}  style={styles.menu}>
                        <Icon name='key'  size={24} style={{marginLeft:-20, marginRight:10}}/>
                        <Text style={styles.textclick} >ChangePassword</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPress} 
                         style={styles.menu}>
                        <Icon name='code'  size={24} style={{marginLeft:-20, marginRight:10}}/>
                        <Text style={styles.textclick} >Log Out</Text>
                        </TouchableOpacity>
                  </View>
            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.userInfosHolder }>
                    <Image style={ styles.avatar } source={{ uri: 'http://oneoffice.com.vn/Content/UserFiles/Images/Company/Logo.png' }} />
                    <View style={ styles.userInfos }>
                        <Text type='h1White' style={ styles.username }>Username</Text>
                        <Text type='h5White'>View and edit profile</Text>
                    </View>

                </View>
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
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    menuText: {
        marginLeft: 20
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
