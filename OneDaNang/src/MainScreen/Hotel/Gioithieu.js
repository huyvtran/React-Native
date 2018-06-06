// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Platform
// } from 'react-native';
// import { Image } from 'react-native'
// import PhotoUpload from 'react-native-photo-upload'

// export default class Index extends Component {

//   constructor(props) {
//     super(props);
//     this.getHTML = this.getHTML.bind(this);
//     this.setFocusHandlers = this.setFocusHandlers.bind(this);
//   }

//   render() {
//     const {id,imagePath,hotelName,summary,note,totalRating,telephone,email,website,googleMap,address,cityIdentifier,districtIdentifier}= this.props.navigation.state.params;
//     const img=imagePath.replace("~", "http://onedanang.vn") 
//     return (
      
//         <View style={styles.container}>
//       <PhotoUpload
//       onPhotoSelect={avatar => {
//         if (avatar) {
//           console.log('Image base64 string: ', avatar)
//         }
//       }}
//     >
//       <Image
//         style={{
//           paddingVertical: 30,
//           width: 150,
//           height: 150,
//           borderRadius: 75
//         }}
//         resizeMode='cover'
//         source={{
//           uri: img   
//         }}
//       />
//     </PhotoUpload>
//         </View>
//     );
//   }

//   onEditorInitialized() {
//     this.setFocusHandlers();
//     this.getHTML();
//   }

//   async getHTML() {
//     const titleHtml = await this.richtext.getTitleHtml();
//     const contentHtml = await this.richtext.getContentHtml();
//     //alert(titleHtml + ' ' + contentHtml)
//   }

//   setFocusHandlers() {
//     this.richtext.setTitleFocusHandler(() => {
//       //alert('title focus');
//     });
//     this.richtext.setContentFocusHandler(() => {
//       //alert('content focus');
//     });
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#ffffff',
//     paddingTop: 40
//   },
//   richText: {
//     alignItems:'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
// });
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import pick from './picker';
import uploadFile from './upload';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource: null,
      data: null
    }
  }
  render(){
    let img = this.state.avatarSource == null? null:
      <Image
        source={this.state.avatarSource}
        style={{height: 200, width: 200}}
      />
    return (
      <View>
        <Text>Hello React Native</Text>
        <TouchableOpacity onPress={this.show.bind(this)}>
          <Text>Show Image Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.upload.bind(this)}>
          <Text>Upload</Text>
        </TouchableOpacity>
        {img}
      </View>
    )
  }
  show(){
    pick((source, data) => this.setState({avatarSource: source, data: data}));
  }
  upload(){
    uploadFile([
      { name : 'info', data : 'DATA'},
      { name: 'avatar', filename: 'avatar.png', data: this.state.data }
    ])
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
}
