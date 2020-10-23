import React , {useState} from 'react'
import {View , Text , StyleSheet , Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


const NewScreen = () => {
    const [colors , setColors] = useState([]) //initial value
    return(
        <View>
            <Button title="Add a Color" onPress={()=>{
                setColors([...colors,randomRgb()])
            }
            }/>
            
            <FlatList 
                keyExtractor ={(color) => color} 
                data={colors} 
                renderItem={({ item }) => {
                return <View style={{height:100 , width:100 , backgroundColor:item}}></View>
            }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red}, ${green}, ${blue})`;
};

const style = StyleSheet.create({

});

export default NewScreen;