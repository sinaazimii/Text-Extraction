import React from "react";
import { Text, StyleSheet ,View , Button , Image, TouchableOpacity  , Dimensions} from "react-native";
import RNMlKit from 'react-native-firebase-mlkit';

const {width , height} = Dimensions.get('window');
const phoneHeight = height - 90 ;
const controlBarHeight = 0.088 * height;
const navigationBarHeight = 0.9 * height;

const ControlBar = (props) => {

  return(
    <View style={styles.controlBar}>
        <Image source={require('./../Assets/switch.png')} style={styles.switchIcon}></Image>
        <Image source={require('./../Assets/gallery.png')} style={styles.galleryIcon}></Image>
        <Image source={require('./../Assets/bolt.png')} style={styles.flashLightIcon}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  controlBar :{
    backgroundColor : 'yellow' , 
    width : width*3/4, 
    height : controlBarHeight, 
    alignItems : 'center',
    borderRadius :20 ,
    position : 'absolute' , 
    bottom : controlBarHeight * 2 , 
    left : width/8
  }, 
  flashLightIcon : {
    height : 40 ,
    width : 40 ,
    position : 'absolute' , 
    right : 30 ,
    bottom : (controlBarHeight /2 ) - 20
  },
  switchIcon : {
    height : 40 ,
    width : 40 ,
    position : 'absolute' , 
    left : 30 ,
    bottom : (controlBarHeight /2 ) - 20
  },
  galleryIcon : {
    height : 40 ,
    width : 40 ,
    position : 'absolute' , 
    bottom : (controlBarHeight /2 ) - 20
  },
});

export default ControlBar;
