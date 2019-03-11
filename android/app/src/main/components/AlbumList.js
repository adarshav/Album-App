import React, { Component } from 'react';
import { View,Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

//class component replaces function component because function component is used to render the static document where as class component renders dynamic document

export class AlbumList extends Component {
    state = { albums: [] };

    //Network requests
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums:response.data }));
    }

    renderAlbums() {
        return (
            this.state.albums.map(album => 
            <AlbumDetail key = {album.title} album = { album } />)
            //this is because when we render albums the detailof the album should also render hence it is placed here
        )
    }

    render() {
        console.log(this.state);
        return (
                //ScrollView is used to implement scrolling the window
                <ScrollView>{this.renderAlbums()}</ScrollView>
        ); 
    }   
}
//export default AlbumList;