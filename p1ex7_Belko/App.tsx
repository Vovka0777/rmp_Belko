import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 2, backgroundColor: 'green'}} />
      <View style={{flex: 3, backgroundColor: 'white'}} />
      <View style={{flex: 2, backgroundColor: 'red'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 2,
    padding: 20,
  },
});

export default Flex;
