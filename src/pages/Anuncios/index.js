import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native'

const DATA = [
  {
    title: '  ',
    id: '001',
    image:
      'http://168.232.158.198/owncloud/index.php/s/5GuB1WDYMqZlc3D/download'
  },
  {
    title: '  ',
    id: '002',
    image:
      'http://168.232.158.198/owncloud/index.php/s/BDQ5Re6hdaN7767/download'
  },
  {
    title: ' ',
    id: '003',
    image:
      'http://168.232.158.198/owncloud/index.php/s/LRxetv2HYU3GR9P/download'
  },
  {
    title: ' ',
    id: '004',
    image:
      'http://168.232.158.198/owncloud/index.php/s/9fqRpy3wELQwUdG/download'
  }
]

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={{ height: 90, width: 375, borderRadius: 5 }}
      source={{ uri: `${image}` }}
    />
  </View>
)

const renderItem = ({ item }) => <Item title={item.title} image={item.image} />

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        pagingEnabled
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate="fast"
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#1c1c1c',
    maxHeight: 110
  },
  item: {
    marginHorizontal: 5
  }
})

export default App
