import * as React from 'react';
import { Platform,View, Text, StyleSheet,Linking } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'
import MapView,{Marker} from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { makeDirectoryAsync } from 'expo-file-system';
import MyLocationMapMarker from './MyLocation'



export default class Contacts extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      list:[],
      latitude:45.46476,
      longitude:9.198049,

  }
  }
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ latitude: location.coords.latitude,longitude: location.coords.longitude });
  };
  componentDidMount(){
    this.getList()
  }
  getList = ()=> {
    firebase.database().ref(`${this.props.doctorType}/`).on('value', (snapshot) => {
      const list = snapshot.val();
      this.setState({list:list})
    });
  }

  render() {
   
    return (
      this.state.list.length >1 && (<MapView style={{flex: 1}}
        region={{
        latitude:this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
       < MyLocationMapMarker/>
        {this.state.list.map(marker => (
    <Marker
    onCalloutPress={
      (e)=>{
       let url =`https://www.google.com/maps?saddr=My+Location&daddr=${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}`
      console.log(url)
        Linking.openURL(url)
      }
    }
    
      coordinate={{
        latitude:parseFloat(marker.latlong.split(',')[0]),
        longitude:parseFloat(marker.latlong.split(',')[1]),
    }}
      title={marker.name}
      description={marker.timing}
    />
  ))}
        </MapView>)
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  number: {
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
});
