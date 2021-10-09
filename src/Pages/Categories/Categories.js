import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import styles from './Categories.style';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(`${Config.API_CATEGORIES}`);

  const handleCategorySelect = catName => {
    navigation.navigate('Meals', {catName});
  };
  const renderCategories = ({item}) => <CategoryCard category={item} 
  onSelect={()=> handleCategorySelect(item.strCategory)}/>;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderCategories}
      />
    </View>
  );
};

export default Categories;
