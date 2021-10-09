import React from 'react';
import {  Text, View, Image, Button, Linking } from 'react-native';
import styles from './MealDetailCard.style'

const MealDetailCard = ({ meal }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.strMealThumb}}/>
            <View style={styles.title_container}>
                <Text style={styles.title}>{meal.strMeal}</Text>
                <Text style={styles.area}>{meal.strArea}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.text}>{meal.strInstructions}</Text>
            </View>
            <View style={styles.link}>
                <Button title="Watch on Youtube" color="red" onPress={() => {Linking.openURL(meal.strYoutube)}} />
            </View>
        </View>
    )
}

export default MealDetailCard

