import React from "react";
import { Text, StyleSheet ,View , Button , Image, TouchableOpacity  , Dimensions} from "react-native";

const {width , height} = Dimensions.get('window');
const phoneHeight = height - 90 ;
const navigationBarHeight = 0.09 * height;

const NavigationBar = (props) => {

  return(
    <View style={styles.navigationBar}>
        <Image source={require('./../Assets/inbox.png')} style={styles.archiveIcon}></Image>
        <Image source={require('./../Assets/more.png')} style={styles.moreIcon}></Image>
        <Image source={require('./../Assets/dot.png')} style={styles.captureIcon}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
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
    position :'absolute' ,
    bottom : navigationBarHeight - 32.5
  },
});

export default NavigationBar;
