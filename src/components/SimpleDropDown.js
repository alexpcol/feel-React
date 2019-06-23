import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Image, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import AppGradient from './AppGradient';

const BUTTON_HEIGHT = 50;

class SimpleDropDown extends React.Component {
	static props = {
		// icon: PropTypes.number,
		title: PropTypes.string,
		style: PropTypes.any,
		onPress: PropTypes.func,
	};

	render(){
		const content = (
			<AppGradient style={styles.button} imageStyle={{ borderRadius: BUTTON_HEIGHT / 2 }}>
		       
		        <Picker
	              selectedValue={this.state.year}
	              style={{height: 50, width: 150}}
	              onValueChange={(itemValue, itemIndex) =>
	                this.setState({year: itemValue})}>
	              <Picker.Item label="2018" value="2018" />
	              <Picker.Item label="2019" value="2019" />
	            </Picker>
		    </AppGradient>
			)

		return (
			<TouchableOpacity
	          accessibilityTraits="button"
	          onPress={onPress}
	          activeOpacity={0.5}
	          style={[styles.container, style]}>

	          {content}

	        </TouchableOpacity>
			)
	}

}

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default SimpleDropDown;