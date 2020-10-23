import React from "react";
import { Text, StyleSheet ,View , Button , Image, TouchableOpacity  , Dimensions} from "react-native";
import NavigationBar from './../Components/NavigationBar'

const {width , height} = Dimensions.get('window');
const phoneHeight = height - 90 ;
const navigationBarHeight = 0.09 * height;
const HomeScreen = (props) => {
/*const HomeScreen = ({navigation}) => {}
and then in onPress we only need to type navigation.navigate('Components')
*/
  console.log(props)
  return(
  <View style={styles.page}>
    <View>
      <Text style={styles.text}>Hello! This is home page</Text>
      <Button 
        onPress={() => props.navigation.navigate('New') }
        title = "Go to New"
      />
      <Button 
        onPress={() => props.navigation.navigate('Settings') }
        title = "Go to Settings"
      />
      <Button 
        onPress={() => props.navigation.navigate('Image') }
        title = "Go to ImageScreen"
      />

    </View>
    <NavigationBar/>
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
  },

});

export default HomeScreen;
