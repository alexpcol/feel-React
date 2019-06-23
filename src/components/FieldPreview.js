import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default ({ title, content }) => (
  <View style={styles.component}>
    <Text italic style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  component: {
    paddingVertical: 16,
  },
  title: {
    color: '#C1C6D5',
    fontSize: 16,
    marginBottom: 5,
  },
  content: {
    color: '#000000',
    fontSize: 20,
  },
});
