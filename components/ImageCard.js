import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageCard =({ data }) => {
 const { container, sub, h1, cover } = styles
  const {image, name} = data
  return (
    <View style={container}>
      <View style={sub}>
      <Image style={cover} source={{uri:image}} />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 180
  },
  sub: {
    padding: 10,
    shadowColor:'#000',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  h1: {
    fontSize: 28,
    textAlign: 'center',
    paddingTop: 10
  },
  cover: {
    width: 160,
    height: 200,
    borderRadius: 10
  }
})

export { ImageCard }