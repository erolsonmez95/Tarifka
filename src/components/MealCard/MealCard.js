import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.image_text_container}>
        <ImageBackground style={styles.image} source={{uri: meal.strMealThumb}}>
          <Text style={styles.text}>{meal.strMeal}</Text>
        </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
