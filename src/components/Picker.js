import React, { Component } from 'react';
import { View, Button, Platform, Animated, Keyboard, Picker as RNPicker, PickerIOS, DatePickerIOS, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// import StyleSheet from './StyleSheet';
// import { isIPhoneX, iPhoneXSafeAreaBottom } from '../styles';

export const PICKER_HEIGHT = 216 //+ (isIPhoneX ? iPhoneXSafeAreaBottom : 0);
const getPosition = visible => (visible ? 0 : -PICKER_HEIGHT);

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#ffffff',
    height: PICKER_HEIGHT,
    position: 'absolute',
    left: 0,
    right: 0,
    // iPhoneX: {
    //   paddingBottom: iPhoneXSafeAreaBottom,
    // },
  },
  toolBar: {
    backgroundColor: '#EBE9E9',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  }
});

const ToolBar = ({ onPress }) => <View style={styles.toolBar}><Button title="OK" onPress={onPress}/></View>

export default class Picker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerPosition: new Animated.Value(getPosition(props.visible)),
    };
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.visible !== this.props.visible) {
      if (nexProps.visible) Keyboard.dismiss();

      Animated.spring(
        this.state.pickerPosition,
        {
          toValue: getPosition(nexProps.visible),
          duration: 100,
          bounciness: 0,
        },
      ).start();
    }
  }

  render() {
    const {
      date,
      data,
      value: pickerValue,
      onChange,
      onDismiss,
      enabled,
      pickerRef,
      ...props
    } = this.props;
    const Selectable = Platform.select({
      ios: date ? DatePickerIOS : RNPicker,
      android: RNPicker,
    })
    
    return (
      <Animated.View
        style={[Platform.OS === 'ios' && styles.picker, {
          bottom: this.state.pickerPosition,
        }]}
      >
        {Platform.OS === 'ios' && <ToolBar onPress={onDismiss} />}
        <Selectable
          {...props}
          date={date}
          onDateChange={onChange}
          selectedValue={pickerValue}
          onValueChange={onChange}
          ref={pickerRef} 
        //   itemStyle={Fonts.h4}
          enabled={enabled}
        >
          {!date && data.map(({ label, value }) => (
            <Selectable.Item key={value} label={label} value={value} />
          ))}
        </Selectable>
      </Animated.View>
    );
  }
}

Picker.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  date: PropTypes.instanceOf(Date),
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })),
  value: PropTypes.any,
};

Picker.defaultProps = {
  date: null,
  data: [],
  value: null,
  enabled: true,
};