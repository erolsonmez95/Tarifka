import React from 'react';
import { FlatList, View } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MealDetailCard from '../../components/MealDetailCard';
import styles from './MealDetail.style';

const MealDetail = ({ route }) => {
    const { idMeal } = route.params;
    const { loading, data, error } = useFetch(`${Config.API_PRODUCT_DETAILS}${idMeal}`)
    console.log()


    const renderMeal = ({item}) => <MealDetailCard meal={item}/>

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default MealDetail

