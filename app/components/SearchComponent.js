import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

const SearchComponent = ({getSearchString, onClearSearch}) => {
  const [searchKey, setsearchKey] = useState('');
  const updateSearch = (search) => {
    console.log('test', searchKey);
    getSearchString(search);
    setsearchKey(search);
  };
  const onClear = () => {
    onClearSearch('');
  };

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      onClear={onClear}
      value={searchKey}
    />
  );
};

export default SearchComponent;
