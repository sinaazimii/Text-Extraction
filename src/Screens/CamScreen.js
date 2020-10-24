import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export const CamScreen = (probs) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera,setCamera] = useState(0)

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 2 }} >
        <Camera style={{ flex: .5 }} type={type}
            ref={ref => {
                setCamera(ref);
                probs.value(ref)

            }}>

        </Camera> 
        
        {/* <TouchableOpacity
                style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
                }}
                onPress={async() => {
                
                    let photo = await camera.takePictureAsync();
                    console.log(photo.uri)
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'yellow' }}> Take </Text>
            </TouchableOpacity> */}
        </View>
        
    );
}

export default CamScreen;