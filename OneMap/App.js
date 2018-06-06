import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import DisplayLatLng from './examples/DisplayLatLng';
import ViewsAsMarkers from './examples/ViewsAsMarkers';


const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

function makeExampleMapper(useGoogleMaps) {
  if (useGoogleMaps) {
    return example => [
      example[0],
      [example[1], example[3]].filter(Boolean).join(' '),
    ];
  }
  return example => example;
}

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  //keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass password -keypass password
  onRegionChange(region) {
    this.setState({ region });
  }
  // ui cai nay no require google play e , v cai devive co CH, anh k ban j a` E thu cai di nhe A phai di bay gio dem ve A xem ok a pp a
  render() {
    console.warn(this.state.region);
    const {height, width} = Dimensions.get('window');
    return (
      <View style={{ position:'absolute',top:0,left:0,bottom:0,right:0, width: width,height: height }}>
        <MapView  style={{ position:'absolute',top:0,left:0,bottom:0,right:0, width: width,height: height }} region={this.state.region}>
          <MapView.UrlTile
            urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapView>
      </View>
      // <MapView
      //   region={this.state.region}
      //   onRegionChange={this.onRegionChange}
      // />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  button: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'rgba(220,220,220,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 12,
    borderRadius: 20,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = App;
