import React, {useState} from 'react';

import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../constants/styles';
import SearchComponent from '../../components/SearchComponent';
var _ = require('lodash');
let constNavigation = null;
const onPressListItem = (item) => {
  constNavigation.navigate('productDetail', {data: item});
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
        <Text style={[styles.textProductNameStyle, {flex: 1}]}>
          {item.productName}
        </Text>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </View>
);

const ProductList = ({navigation, route}) => {
  constNavigation = navigation;

  const [products, setProducts] = useState(route.params.data.products);

  const updateSearch = (search) => {
    if (search === '') {
      setProducts(route.params.data.products);
    } else {
      setProducts(
        products.filter((item) => {
          return item.productName.toLowerCase().match(search.toLowerCase());
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <SearchComponent
        getSearchString={updateSearch}
        onClearSearch={updateSearch}
      />
      <FlatList data={products} renderItem={renderItem} />
    </View>
  );
};

export default ProductList;
