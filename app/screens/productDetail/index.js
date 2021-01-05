import React from 'react';

import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../constants/styles';

let product = null;
const productView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productFullImage}
        source={{
          uri: product.image,
        }}
      />
      <Text style={[styles.textProductNameStyle, {marginTop: 10}]}>
        {product.productName}
      </Text>
      {prodcutInfo()}
    </View>
  );
};
const prodcutInfo = () => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.textStyle, {marginTop: 10, alignSelf: 'flex-start'}]}>
        {product.price}
      </Text>
      <Text
        style={[
          styles.textProductNameStyle,
          {
            marginTop: 10,
            fontSize: 18,
            alignSelf: 'flex-start',
          },
        ]}>
        Description:
      </Text>
      <Text
        style={[
          styles.textProductNameStyle,
          {marginTop: 10, fontSize: 15, alignSelf: 'flex-start'},
        ]}>
        {product.productDescription}
      </Text>
    </View>
  );
};
const productDetail = ({navigation, route}) => {
  product = route.params.data;
  return <View style={styles.container}>{productView()}</View>;
};

export default productDetail;
