import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const filter1=({
    face:{
        bounds:{
            size:{
                width:faceWidth,
                height:faceHeight
            },
            leftEyePosition,rightEyePosition

        }
    }
})=>{
const glassesWidth=faceWidth
const glassesHeight=faceHeight/3
const transformAngle=(angleRad=Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x)))=>{
    angleRad *180/Math.PI
}
}
    return(
        <View>
            <Image></Image>
        </View>
    )

export default Filter1
