import React, {useState} from 'react';

import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from '../../constants/styles';

import {localData} from '../../constants/jsonData';
import SearchComponent from '../../components/SearchComponent';
let constNavigation = null;
var _ = require('lodash');
const onPressListItem = (item) => {
  constNavigation.navigate('productList', {data: item});
};
const renderItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={styles.productCell}
      onPress={() => onPressListItem(item)}>
      <View style={styles.productCell}>
        <Text style={styles.textStyle}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </View>
);

const CategoryList = ({navigation}) => {
  const [categories, setCategories] = useState(localData);

  const updateSearch = (search) => {
    if (search === '') {
      setCategories(localData);
    } else {
      setCategories(
        localData.filter((item) => {
          return item.categoryName.toLowerCase().match(search.toLowerCase());
        }),
      );
    }
  };

  constNavigation = navigation;

  return (
    <View style={styles.container}>
      <SearchComponent
        getSearchString={updateSearch}
        onClearSearch={updateSearch}
      />
      <FlatList data={categories} renderItem={renderItem} />
    </View>
  );
};

export default CategoryList;
