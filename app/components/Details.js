import React,{Component} from 'react';
import {
    View,
    Text,Alert,
    Button,TouchableHighlight,Modal,StyleSheet, Dimensions
    } from 'react-native';
import { StactNavigator } from 'react-navigation';
import Overlay from 'react-native-modal-overlay';

var { width, height } = Dimensions.get('window');
export default class DetailsScreen extends Component {
    state = {modalVisible: false}
    
      showOverlay() {
        this.setState({modalVisible: true})
      }
    
      hideOverlay() {
        this.setState({modalVisible: false})
      }
      _onPress() {
      //  Alert.alert('on Press!');
      this.hideOverlay()
       
       }
      
    static navigationOptions = {
        title: 'Detail Screen',
      };

    render() {
        const { params } = this.props.navigation.state;

        return (

     <View>
  

    <Overlay visible={this.state.modalVisible}
      closeOnTouchOutside animationType="fade"
      containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}} childrenWrapperStyle={{backgroundColor: '#eee'}} >
          <Text style={{fontWeight:'300', fontSize: 20}}>Some Overlay Heading</Text>
          <View style={{borderBottomWidth: 1, width: 100, paddingTop: 10}}></View>
          <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center'}}>Lorem ipsum dolor sit amet, quo te novum tritani maiestatis. At libris reformidans mel, et modo idque pericula sit, alienum appareat cu eos. At pri tota nulla consequuntur. Est te diam erant, eum no altera dolorem facilisis. Ad per facilisi pericula postulant, id his dicta facete, alii constituto at per. Ex his alia graece democritum.
</Text>
<View style={styles.buttonContainer}>
<Button onPress={this.hideOverlay.bind(this)} title="Close" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
</View>
    </Overlay>

    <Button 
    onPress={this.showOverlay.bind(this)}
    title="Show Overlay"
    color="#841584"
  />
    </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
       backgroundColor: '#ede3f2',
       padding: 100
    },
    buttonContainer: {
        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      },
    modal: {
       flex: 1,
       alignItems: 'center',
       backgroundColor: '#f7021a',
       padding: 100
    },
     
    text: {
       color: '#3f2949',
       marginTop: 10
    }, 
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width
      } 
 })