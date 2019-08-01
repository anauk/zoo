import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

const Layout = props =>{
  const { container} = styles
  return (
    <ScrollView>
      <View style={container}>
        {props.children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 10
  }
})
export {Layout}