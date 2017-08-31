import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,ListView,Image

} from 'react-native';
import { StactNavigator } from 'react-navigation';
import data from '../data/Content.json';

const ds = new ListView.DataSource({
  rowHasChanged: (r1,r2) => r1 !== r2
});

const dataSource = ds.cloneWithRows(data);

export default class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  
  render() {
    const { navigate } = this.props.navigation;
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
      <View style={styles.container}>
       
        <Button
          onPress={() => navigate('DetailsScreen',{user:'Satish'})}
          title="Details Screen"
        />
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => 
        <View>
          <Text>{rowData.title}</Text>
          <Text>{rowData.description}</Text>
          <Text>{rowData.views}</Text>
          <Button title ="Link to course" />
          <Image source={{uri: rowData.image}} 
          style={{width: 300, height: 200}}/>

          </View>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});