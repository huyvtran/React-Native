import React, { Component, PropTypes } from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome'
import { StackNavigator } from 'react-navigation';
import spinner from './images/logo.png';
import usernameImg from './images/username.png';
import passwordImg from './images/password.png';
import eyeImg  from './images/eye_black.png';
import logoImg from './images/logo-onedn-blank1.png';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
import fblogo  from './images/facebook.png';
import twitter  from './images/twitter.png';
import google  from './images/google.png';

export default class index extends React.Component {		
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
			isLoading: false,
			username:'nguyenhoangsonit@gmail.com',
			pass:'123456',
			key:'',
			error:' ',
			menuAction:{
				datamenu:'ádniasdnisdn',
			}
			
		};
		this.showPass = this.showPass.bind(this);
		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);
		this._PessSupport = this._PessSupport.bind(this);
		this._onPress = this._onPress.bind(this);
	}
	
	_onPress() {
	
		if (this.state.isLoading) return;
		let  a =this.state.username;
		let  b =this.state.pass;
        // let movie = users.filter(x => x.login.username === a && x.login.password === b );
             var datas={
            "email": a,
            "password": b,
                }
                return	 fetch('http://onesystemadmin.azurewebsites.net/api/user/login?isAdminLogin=false', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
               
                body: JSON.stringify(datas),
                }).then(res=>res.json()).then(res => {
					if(res.didError==false)
					{
						this.setState({
							key:res.model.token
						})
						
						 this.props.navigation.navigate('HomeScreen',{ ... res.model,...this.state.menuAction });
					}
					else{
						this.setState({
							error: res.errorMessage
						})
					}
				});

	}
	_PessSupport(){
		this.props.navigation.navigate('Support');
	}
  
	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }
 
	render() {
		const { navigate } = this.props.navigation;
		const changeWidth = this.buttonAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
		  });
		  const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, MARGIN]
		  });
		  if (this.state.isLoading) {
			return (
			  <View style={{flex: 1, paddingTop: 20}}>
				<ActivityIndicator />
			  </View>
			);
		  }
		//   if(this.state.key!==''){
		// 	  return 	this.props.navigation.navigate('HomeScreen');
		//   }
		return (
		<ScrollView style={styles.container5}>
		<View style={styles.container4}
		>
			<Image source={logoImg} style={styles.image2} />
			<View style={{flexDirection: 'row',marginTop:20, marginLeft:10}}>
			<Image source={fblogo} style={styles.imgconnect} />
			<Image source={twitter} style={styles.imgconnect} />
			<Image source={google} style={styles.imgconnect} />
			</View>
		</View>
		<View style={styles.container2} >
		
			<KeyboardAvoidingView behavior='padding'>
				
					<View style={styles.inputWrapper}>
						<Text  style={{marginLeft:30,color:'red',marginBottom:5}}>{this.state.error}</Text>
						<Icon name='user-o' size={15} style={styles.inlineImg}/>
						<TextInput style={styles.input}
							placeholder='Email'
							autoCapitalize={'none'}
							returnKeyType={'done'}
							autoCorrect={false}  
							type='email'
							underlineColorAndroid={'transparent'}
							ref= {(el) => { this.username = el; }}
							onChangeText={(username) => this.setState({username})}
							value={this.state.username}>
							
							</TextInput>
					</View>			

					<View style={styles.inputWrapper}>
					<Icon name='key' size={15} style={styles.inlineImg2}/>	
						<TextInput style={styles.input}
						secureTextEntry={this.state.showPass}
						placeholder='Password'
						returnKeyType={'done'}
						autoCapitalize={'none'}
						autoCorrect={false}
						underlineColorAndroid={'transparent'}
						ref= {(el) => { this.pass = el; }}
						onChangeText={(pass) => this.setState({pass})}
						value={this.state.pass}>
						
						</TextInput>
					</View>

					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.btnEye}
						onPress={this.showPass}>
						<Image source={eyeImg} style={styles.iconEye} />
					</TouchableOpacity>
			</KeyboardAvoidingView>
			<Animated.View >
				<TouchableOpacity style={styles.button}
					onPress={this._onPress}
					activeOpacity={1} >
					
							<Text style={styles.text}>Login</Text>
					
				</TouchableOpacity>
				<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
			</Animated.View>
				<View style={{flex: 1, paddingTop: 15}}>
					</View>
				</View>
				<View style={styles.container6}>
				<TouchableOpacity onPress={this._PessSupport} 
				>
				<View style={{flexDirection: 'row'}}>
				<Text>Don't have an account</Text>
			   <Text style={styles.textclick} > Support</Text>
		  	
			   </View>
			   </TouchableOpacity>
			</View>
		</ScrollView>
		);
	}
}
const styles = StyleSheet.create({ 
	container5: {
		flex: 1,
		backgroundColor:'white',
	},container2: {
	flex: 2,
	paddingTop: 30,
	alignItems: 'center',
   },
   image2: {
	width: 100,
	height: 100,
	marginTop:50,
},
container4: {
	flex: 3,
	alignItems: 'center',
	justifyContent: 'center',
},
container6: {
	alignItems: 'center',
	marginTop:50,
},
text2: {
	color: 'white',
	backgroundColor: 'transparent',
},
text: {
	color: 'white',
	fontWeight: 'bold',
	backgroundColor: 'transparent',
	marginTop: 20,
},
	container: {
		flex: 4,
		alignItems: 'center',
		marginTop:-150,
	},
	input: {
		backgroundColor: 'white',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		color: 'gray',
		borderColor:'lightgray',
		borderWidth: 0.5,
		
	},
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 35,
		color: 'lightgray',
		
	},
	inlineImg2: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 15,
		color: 'lightgray',
		
	},
	btnEye: {
    position: 'absolute',
    top: 60,
	right: 28,
	marginTop:20,
  },
  iconEye: {
    width: 25,
    height: 25,
	tintColor: 'rgba(0,0,0,0.2)',
	marginTop :17
  },
  button: {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: "#FF3366",
	height: MARGIN,
	borderRadius: 30,
	width:250,
	zIndex: 100,
	flexDirection: 'row',
},
circle: {
	height: MARGIN,
	width: MARGIN,
	marginTop: -MARGIN,
	borderWidth: 1,

	alignSelf: 'center',
	zIndex: 99,
	backgroundColor: '#F035E0',
},
text: {
	color: 'white',
	backgroundColor: 'transparent',
},
image: {
	width: 24,
	height: 24,

},
textclick:{
	fontWeight:'bold',
},
imgconnect:{
	width: 30,
	height: 30,
	marginRight :15,
}
});
module.export =index;
