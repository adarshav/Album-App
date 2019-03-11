import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
//this component will not be changing hence we are using functional component
const AlbumDetail = (props) => {
    //props is used to take the data from parent to child
    return(
        //here Card is replaced by View tag
        <Card>
                <View style = {styles.thumbnailContainerStyle}>
                    <Image
                        style =  {styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image}}
                    />
                </View>
                <View style = {styles.headerContainerStyle}>
                    <Text style = {styles.headerTextStyle}> {props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
                
                <Image style = {styles.imageStyle} source = {{uri: props.album.image}}/>
                
                    {/* <Button /> */}
        </Card>
    );
}

const styles = {
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50, 
        width:50
    },
    headerTextStyle: {
        fontSize:18
    },
    imageStyle: {
        height:300,
        flex:1,
        width: null
    }
}

export default AlbumDetail;
//yen nin problem
//albumdetail 