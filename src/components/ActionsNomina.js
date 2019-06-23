import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export default ({ title, action }) => (
  <TouchableOpacity
    style={styles.submitButtonStyle}
    activeOpacity = { .5 }
    onPress={action}>
   
    <Text style={styles.buttonTextStyle}> {title} </Text>
    <Image style={1} source={require('../../assets/arrow.png')}/>

  </TouchableOpacity>
)

const styles = StyleSheet.create({
  submitButtonStyle: {
    paddingLeft:15,
    paddingTop:20,
    paddingBottom:20,
    paddingEnd:15,
    marginTop:20,
    marginLeft:25,
    marginRight:25,
    marginBottom: 10,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 4, // Android
    flexDirection: 'row', 
    alignItems: 'center',
    alignContent: 'space-between'
  },
 
  buttonTextStyle:{
      fontSize: 25,
      color:'#000000',
      textAlign:'left',
      fontWeight: 'bold',
      flex:9
  }
});