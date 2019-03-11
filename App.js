import React, {Component} from 'react';
import { View} from 'react-native';
import { Name } from './android/app/src/main/components/Name';
import {Header} from './android/app/src/main/components/header';
import { AlbumList } from './android/app/src/main/components/AlbumList'; 
import AlbumDetail from './android/app/src/main/components/AlbumDetail';
class App extends Component {

  render() {
    return(
      <View style = {{ flex: 1 }}>
        <Header headerText = {'Albums'} />
        {/* Now the header  component can be used multiple times without any hassle */}
        <AlbumList />
        {/* <AlbumDetail /> */}
      </View>
    )
  }
}

export default App;