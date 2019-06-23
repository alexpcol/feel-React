import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import AppGradient from './AppGradient';

const BUTTON_HEIGHT = 50;

class Button extends React.Component {
  static props = {
    data: PropTypes.number,
    onChange: PropTypes.func,
    title: PropTypes.string,
    style: PropTypes.any,
    onPress: PropTypes.func,
  };

  static height = BUTTON_HEIGHT;

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  showMenu = () => {
    this._menu.show();
  };

  onItemPress = value => () => {
    this.props.onChange(value)
    this._menu.hide()
  }

  render() {
    const { title, style, data } = this.props;

    const content = (
      <Menu
        ref={this.setMenuRef}
        style={{ height: data.length > 8 ? 400 : 'auto' }}

        button={
          <TouchableOpacity
            onPress={this.showMenu}
            accessibilityTraits="button"
            activeOpacity={0.5}
            style={[styles.container, style]}
          >
            <AppGradient style={styles.button} imageStyle={{ borderRadius: BUTTON_HEIGHT / 2, resizeMode: 'stretch' }}>
              <Text
                style={styles.title}
              >
                {title}
              </Text>
            </AppGradient>
          </TouchableOpacity>
        }
      >
        <ScrollView>
          {data.map(({ label, value }) => <MenuItem key={value} onPress={this.onItemPress(value)}>{label}</MenuItem>)}
        </ScrollView>
      </Menu>
    );

    return (
      <View style={[styles.container, style]}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
});

export default Button;
