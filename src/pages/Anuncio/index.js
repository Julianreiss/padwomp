import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import WompCast from './../../../assets/images/WompCast.png'

export default function Anuncio() {
  return (
    <View>
      <Image style={styles.imgAnuncio} source={WompCast} />
    </View>
  )
}

const styles = StyleSheet.create({
  imgAnuncio: {
    height: 120,
    width: '100%',
    backgroundColor: '#1b1b1b'
  }
})
