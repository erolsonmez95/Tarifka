import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderBottomLeftRadius:45,
    borderTopStartRadius:45,
    margin: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  image: {
    margin:10,
    width:100,
    height:100,
    resizeMode:"contain",
  },
  image_container:{
   backgroundColor:'#e0e0e0' 
   ,borderBottomLeftRadius:45,
   borderTopStartRadius:45,
  },
  title: {
    flex:1,
    fontWeight: 'bold',
    fontSize:17,
    padding:15
  }
});
