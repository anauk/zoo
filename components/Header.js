import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const Header = ({title}) => {
  const { header, titleHeader} = styles
  return (
    <View style = {header}>
      <Text style = {titleHeader}>{title}</Text>
    </View>
  )
}
export { Header }
const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    height: 105,
    backgroundColor: 'gold'
  },
  titleHeader:{
    fontSize: 28,
    textAlign: 'center',
  }
});