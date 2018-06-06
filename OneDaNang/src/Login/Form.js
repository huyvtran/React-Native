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

import { StackNavigator } from 'react-navigation';
import spinner from './images/loading.gif';
import { users } from '../../data/data';
import { me } from '../../data/data';
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
export default class Form extends React.Component {		
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
			isLoading: true,
			username:'',
			password:'',
			key:'',
			error:' ',
			test:'son_hoang124@yahoo.com'
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
		let dataSource =this.state.dataSource;
		let movie = users.filter(x => x.login.username === a && x.login.password === b );
		if(a.indexOf('@')>-1 && a.indexOf('.com')>-1 )
		{
		
		if(movie.length > 0){
			this.setState({ isLoading: true });
			Animated.timing(
				this.buttonAnimated,
				{
					toValue: 1,
					duration: 200,
					easing: Easing.linear
				}
			).start();
			setTimeout(() => {
				this._onGrow();
			}, 2000);
			setTimeout(() => {
				
					
					this.setState({ isLoading: false,
					key: a});	this.props.navigation.navigate('UserScreen');	
					this.buttonAnimated.setValue(0);
					this.growAnimated.setValue(0);
				
					
				}, 2300);
		} else {
			
			this.setState({error:'Tài khoản hoặc mật khẩu không đúng'})
		}
		
	}
	else{
		
		this.setState({error:'Vui lòng điền đúng định dạng email'})
	}
		
	}
	_PessSupport(){
		this.props.navigation.navigate('Support');
	}
	_onGrow() {
		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
	}
	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
		movies = responseJson.movies;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
		  dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
		  if(this.state.key!==''){
			  return 	this.props.navigation.navigate('UserScreen');
		  }
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
						
						<TextInput style={styles.input}
							placeholder='Email'
							autoCapitalize={'none'}
							returnKeyType={'done'}
							autoCorrect={false}  
							type='email'
							underlineColorAndroid={'transparent'}
							ref= {(el) => { this.username = el; }}
							onChangeText={(username) => this.setState({username})}
							value={this.state.username}/>
					</View>			

					<View style={styles.inputWrapper}>

						<TextInput style={styles.input}
						secureTextEntry={this.state.showPass}
						placeholder='Password'
						returnKeyType={'done'}
						autoCapitalize={'none'}
						autoCorrect={false}
						underlineColorAndroid={'transparent'}
						ref= {(el) => { this.pass = el; }}
						onChangeText={(pass) => this.setState({pass})}
						value={this.state.pass}/>
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
						{this.state.isLoading ?
							<Image source={spinner} style={styles.image} />
							:
							<Text style={styles.text}>Login</Text>
						}
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
		borderRadius: 30,
		color: 'gray',
		borderColor:'black',
		borderWidth: 1,
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
		top: 9,
		color: 'black',
		
	},
	btnEye: {
    position: 'absolute',
    top: 55,
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
},
circle: {
	height: MARGIN,
	width: MARGIN,
	marginTop: -MARGIN,
	borderWidth: 1,
	borderColor: '#F035E0',
	borderRadius: 100,
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
module.export =Form;
