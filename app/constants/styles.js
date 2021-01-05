import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    marginLeft: 20,
    alignSelf: 'center',
  },

  productCircleImage: {
    height: 80,
    width: 80,
    backgroundColor: 'red',
    borderRadius: 80 / 2,
  },
  productCell: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  divider: {
    height: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#D3D3D3',
  },
  textProductNameStyle: {
    fontSize: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },

  productFullImage: {
    flex: 0.5,
    backgroundColor: '#F1F1F1',
    resizeMode: 'contain',
  },
});

export default styles;
