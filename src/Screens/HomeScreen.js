import React , {useEffect , useState} from "react";
import { Text, StyleSheet ,View , Button , Image, TouchableOpacity  , Dimensions} from "react-native";
import { Camera } from 'expo-camera'
import {Permissions } from 'expo-permissions';
import NavigationBar from './../Components/NavigationBar'
import ControlBar from './../Components/ControlBar'
import CamScreen from "./CamScreen";


const {width , height} = Dimensions.get('window');
const phoneHeight = height - 90 ;
const navigationBarHeight = 0.09 * height;

const HomeScreen = (props) => {
/*const HomeScreen = ({navigation}) => {}
and then in onPress we only need to type navigation.navigate('Components')
*/
  const [homeCamera,setHomeCamera] = useState(0)

  console.log(props)
  return(
  <View style={styles.page}>
    <View>

    </View>
    <CamScreen value={setHomeCamera} />
    
    <ControlBar/>
    <View style={styles.navigationBar}>
        <Image source={require('./../Assets/inbox.png')} style={styles.archiveIcon}></Image>
        <Image source={require('./../Assets/more.png')} style={styles.moreIcon}></Image>
        <TouchableOpacity style={styles.captureTouchable}
              onPress={async() => {
                let photo = await homeCamera.takePictureAsync();
                console.log(photo.uri)
                }}>
          <Image source={require('./../Assets/dot.png')} style={styles.captureIcon}></Image>
        </TouchableOpacity>
        
    </View>
  </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  page : {
    height : phoneHeight , 
    width : width , 
    backgroundColor : 'blue' ,
    position : 'absolute' , 
    top : 0 ,
    flex : 1
  },
  navigationBar :{
    backgroundColor : 'red' , 
    width : width, 
    height : navigationBarHeight, 
    position : 'absolute' , 
    bottom : 0 ,
    alignItems : 'center' , 
  }, 
  archiveIcon : {
    height : 45 ,
    width : 45 ,
    position : 'absolute' , 
    right : 30 ,
    bottom : (navigationBarHeight /2 ) - 22.5
  },
  moreIcon : {
    height : 45 ,
    width : 45 ,
    position : 'absolute' , 
    left : 30 ,
    bottom : (navigationBarHeight /2 ) - 22.5
  },
  captureIcon : {
    height : 65 ,
    width : 65 ,

  },
  captureTouchable : {
    position :'absolute' ,
    bottom : navigationBarHeight - 32.5
  },
});

export default HomeScreen;
