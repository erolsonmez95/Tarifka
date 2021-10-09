import { StyleSheet ,Dimensions} from "react-native"
const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 4,
        resizeMode: 'cover',
    },
    title_container: { 
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    title: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    },
    area: {
        marginBottom: 10,
        marginHorizontal: 10,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        margin: 10,
    },
    text: {
        fontSize: 17,
    },
    link: {
        margin: 15,
        borderRadius: 25,
    },
})