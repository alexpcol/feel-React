import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Colors from './Colors';
import Spacing from './Spacing';

const ListItem = (props) => {
  const {
    onPress,
    onLongPress,

    title,
    titleNumberOfLines,
    subtitle,
    subtitleNumberOfLines,

    leftElement,
    leftElementOnPress,

    rightElement,
    rightElementOnPress,

    rightTitle,
    rightTitleNumberOfLines,
    rightTitleStyle,

    switchButton,
    onSwitch,
    switchDisabled,
    switchOnTintColor,
    switchThumbTintColor,
    switchTintColor,
    switched,

    label,
    style,
    ...attributes
  } = props;

  const Component = onPress ? TouchableHighlight : View;
  const LeftElementWrapper = leftElementOnPress ? TouchableHighlight : View;
  const RightElementWrapper = rightElementOnPress ? TouchableOpacity : View;

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={Colors.underlayColor}
      style={[styles.component, style]}
      {...attributes}
    >
      <View style={styles.wrapper}>

        {React.isValidElement(leftElement)
          ? leftElement
          : leftElement &&
          <LeftElementWrapper
            style={styles.iconStyle}
            onPress={rightElementOnPress}
          >
            <Icon
              iconStyle={styles.icon}
              name={leftElement.name}
              source={leftElement}
            />
          </LeftElementWrapper>
        }

        <View style={[styles.titleSubtitleContainer, leftElement && { marginLeft: Spacing.tiny * 1.5 }]}>
          {title !== null && (
            <Text
              numberOfLines={titleNumberOfLines}
              fontWeight="regular"
            >
              {title}
            </Text>
          )}
          {React.isValidElement(subtitle)
            ? subtitle
            : subtitle !== null && (
              <Text
                numberOfLines={subtitleNumberOfLines}
                small
                color={Colors.mediumText}
              >
                {subtitle}
              </Text>
          )}
        </View>

        {!switchButton && rightElement && (React.isValidElement(rightElement) ? rightElement : (
          <RightElementWrapper
            onPress={onPressRightElement}
            disabled={!onPressRightElement}
            style={styles.rightElementContainer}
          >
            <Icon
              iconStyle={styles.icon}
              name={rightElement.name}
              source={rightElement}
              size={28}
            />
          </RightElementWrapper>
        ))}

        {switchButton &&
          <View style={styles.switchContainer}>
            <Switch
              onValueChange={onSwitch}
              disabled={switchDisabled}
              onTintColor={switchOnTintColor}
              thumbTintColor={switchThumbTintColor}
              tintColor={switchTintColor}
              value={switched}
            />
          </View>
        }

        {(rightTitle && rightTitle !== '') && (
          <View style={styles.rightTitleContainer}>
            <Text
              numberOfLines={rightTitleNumberOfLines}
              style={[styles.rightTitleStyle, rightTitleStyle]}
            >
              {rightTitle}
            </Text>
          </View>
        )}

        {label && label}
      </View>
    </Component>
  );
};

ListItem.defaultProps = {
  switchButton: false,
  titleNumberOfLines: 1,
  subtitleNumberOfLines: 1,
  switchOnTintColor: Colors.blue,
  subtitle: null,
  title: '',
};

ListItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  style: PropTypes.object,

  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  titleNumberOfLines: PropTypes.number,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  subtitleNumberOfLines: PropTypes.number,

  leftElement: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  leftElementOnPress: PropTypes.func,

  rightElement: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  rightElementOnPress: PropTypes.func,

  rightTitle: PropTypes.string,
  rightTitleNumberOfLines: PropTypes.number,
  rightTitleStyle: PropTypes.object,

  switchButton: PropTypes.bool,
  onSwitch: PropTypes.func,
  switchDisabled: PropTypes.bool,
  switchOnTintColor: PropTypes.string,
  switchThumbTintColor: PropTypes.string,
  switchTintColor: PropTypes.string,
  switched: PropTypes.bool,

  label: PropTypes.any,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  component: {
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.small,
    borderBottomColor: Colors.cellBorder,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: Spacing.small,
  },
  titleSubtitleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  rightElementContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  switchContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightTitleContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightTitleStyle: {
    color: Colors.mediumText,
  },
});

export default ListItem;
