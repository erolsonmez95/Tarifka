import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import styles from './Meals.style';

const Meals = ({navigation,route}) => {
  const {catName} = route.params;
  const {loading, data, error} = useFetch(`${Config.API_PRODUCTS_BYCATEGORY}${catName}`);
  const handleMealSelect = idMeal => {
    navigation.navigate('MealDetail', {idMeal});
  };
  const renderMeals = ({item}) => <MealCard meal={item}
  onSelect= {()=> handleMealSelect(item.idMeal)}
  />;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        keyExtractor={item => item.idMeal}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default Meals;
