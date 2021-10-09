import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    borderRadius: 20,
    overflow: "hidden",

  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingRight:15
  },
  image_text_container: {
    flex: 1,
    margin: 10,
  },
});
