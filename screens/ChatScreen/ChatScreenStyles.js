import {StyleSheet} from 'react-native';
import {Colors, Constants} from '../../global/Index';

export const styles = StyleSheet.create({
  header: {
    padding: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: Colors.WHITE,

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
  },
  container: {
    height: Constants.SCREEN_HEIGHT,
    width: Constants.SCREEN_WIDTH,
  },
  circleAvtar: {
    marginHorizontal: 10,
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: Colors.secondary,
  },
  inputView: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '86%',
    height: 50,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'black',
  },
});
