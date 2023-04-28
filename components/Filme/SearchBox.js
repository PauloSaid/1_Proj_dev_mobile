import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import styles from '../styles';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (text) => {
      setSearchQuery(text);
      Alert.alert(`Buscando por "${searchQuery}"...`);
    };
  
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.SearchBox}
          onChangeText={handleSearch}
          onSubmitEditing={handleSearch}
          value={searchQuery}
          placeholder="Pesquisar"
          placeholderTextColor="#aaa"
        />
      </View>
    );
  };
  
  export default SearchBox;