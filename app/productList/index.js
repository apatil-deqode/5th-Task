import React from 'react';

import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from './StlyeCommon';
import {localData} from './jsonData';
// let constNavigation = null;

const onPressListItem = (item) => {
  // constNavigation.navigate('DetailView', {data: item});
};
const renderItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={styles.productCell}
      onPress={() => onPressListItem(item)}>
      <View style={styles.productCell}>
        <Image
          style={styles.productCircleImage}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.textStyle}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </View>
);

const ListView = ({navigation}) => {
  // constNavigation = navigation;

  return (
    <View style={styles.container}>
      <FlatList data={localData} renderItem={renderItem} />
    </View>
  );
};

export default ListView;
