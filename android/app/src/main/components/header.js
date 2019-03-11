import React from 'react';
import {Text, View}  from 'react-native';

//component
export const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        {/* here we are using Albums[hardCoding] we can pass it by props*/}
        {/* props can be implemented in the above method */}
        </View>
    ) 
}

const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        //if u want shadow these are the properties to be used shadowOffset defines how to be the shadow for ex:width, height
        shadowColor:'black',
        shadowOffset:{ width : 0, height : 2 },
        shadowOpacity:0.9,
        elevation:2,
        position:'relative'

    },

    textStyle:{
        fontSize:30 
    }
}
//make the component available to other parts of