import React, { Component } from 'react';
import { ScrollView ,TouchableOpacity,Text,View,StyleSheet,TextInput,FlatList} from 'react-native';
import { Tile, List, ListItem, } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import {City} from '../../../data/cities';
import MultiSelect from 'react-native-multiple-select';
import imgcheck from '../../../data/imgdata/1.png'
class DetailHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data :[] ,
        isLoading: true,
        refreshing: true,
        str:'2',
        selectedItems:[],
        vHotelName:'',
          vSao:'',vSoDienThoai:'',vEmail:'',vDiaChi:'',vLoaiKS:'',vMap:'',vSummary:'',vNote:''
    }
  }  items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems:selectedItems });
  };  
  _onPress (){
    
     let  a= this.state.str;
     alert (a)
  }
 
  _getOptionList() {
      return this.refs['OPTIONLIST'];
    }


    _canada(province) {

    this.setState({
        ...this.state,
        canada: province
      });
  }
  render() {
    const {id,imagePath,hotelName,summary,note,totalRating,telephone,email,website,googleMap,address,cityIdentifier,districtIdentifier}= this.props.navigation.state.params;
    let Sao= [
    {
      value: '5 Sao',
    },
    {
        value: '4 Sao',
      }, {
        value: '3 Sao',
      }, {
        value: '2 Sao',
      }, {
        value: '1 Sao',
      }];

      let selectedItem = selectedItems => {
 
        console.log(selectedItems);
    };

 

    const { selectedItems } = this.state;
    const test = this.state.selectedItems;
    return (
      <ScrollView >
         
        <View     style={{marginLeft:20,marginRight:20}}>
        <Dropdown
        label={cityIdentifier}
        data={City}
      
	  	
          />
          <Dropdown
          label={districtIdentifier}
          data={City}
        />
        <Text style={{fontSize:18}}>Tên Hotel </Text>
        <List >     
          <TextInput 				
						placeholder={hotelName}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
            ref= {(el) => { this.vHotelName = el; }}
            onChangeText={(vHotelName) => this.setState({vHotelName})}
					
					>
     
          </TextInput>
        </List>   
      
        <Dropdown
        label={`${totalRating} Sao`}
        data={Sao}
          />
     <Text style={{fontSize:18}}>Số điện thoại </Text>
      <List >     
          <TextInput 				
						placeholder={this.state.data.telephone}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
					>
           <Text>{telephone}</Text>
          </TextInput>
        </List>   
        <Text style={{fontSize:18}}>Email </Text>
      <List >     
          <TextInput 				
						placeholder={this.state.data.email}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
					>
           <Text>{email}</Text>
          </TextInput>
        </List>  
        <Text style={{fontSize:18}}>Website </Text>
      <List >     
          <TextInput 				
						placeholder={this.state.data.website}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
					>
           <Text>{website}</Text>
          </TextInput>
        </List>  
        <Text style={{fontSize:18}}>Địa chỉ </Text>
      <List >     
          <TextInput 				
						placeholder={this.state.data.address}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
					>
           <Text>{address}</Text>
          </TextInput>
        </List>  
        <Text style={{fontSize:18}}>Loại khách sạn </Text>
        <View style={{ flex: 1 , marginTop:10 }}>
        <MultiSelect
          hideTags
          items={this.items}
          uniqueKey="name"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText={this.state.test}
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          style={{height:50}}
          
        />
              <View>
            <Text>{`${this.state.selectedItems} `}</Text>
     
              </View>
            </View>

        <Text style={{fontSize:18}}>Maps</Text>
      <List >     
          <TextInput 				
						placeholder={this.state.data.googleMap}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
					>
           <Text>{googleMap}</Text>
          </TextInput>
        </List>  
        <Text style={{fontSize:18}}>Summary </Text>
        <List >     
          <TextInput 				
						placeholder={this.state.data.summary}	
            underlineColorAndroid={'transparent'}
            style={{marginRight:20,marginTop:-15}}
					>
           <Text>{summary}</Text>
          </TextInput>
             
        </List>       
        <Text style={{fontSize:18}}>Note </Text>
        <List >     
          <TextInput 	
            underlineColorAndroid={'transparent'}
            style={{marginRight:3,marginTop:-15}}
					>
            <Text>{note}</Text>
          </TextInput>
        </List>
        <View>
       
      </View>
        <View style={{
                flex:1,              
               flexDirection: 'row',
               justifyContent: 'center',
               marginTop:20,
               marginBottom:20}}  >
        <TouchableOpacity style={styles.button}>
                <Text> Quay Lai </Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.buttonSave} onPress={this._onPress}>
                <Text> Luu </Text>
        </TouchableOpacity>
        </View>
  </View> 
        
      </ScrollView>
    );
  }
}
 const styles = StyleSheet.create({
button: {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: "#FF3366",
	height: 40,
	borderRadius: 5,
	width:100,
  zIndex: 100,
  marginRight:10,
},
select: {
 marginTop:20,
  width: 100,
  backgroundColor: '#6A85B1',
},
buttonSave: {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: "green",
	height: 40,
	borderRadius: 5,
	width:100,
  zIndex: 100,
  marginLeft:10,
},})
export default DetailHotel;
