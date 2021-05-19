import {StyleSheet} from 'react-native';
import {Colors, Constants} from '../../global/Index';

export const styles = StyleSheet.create({
  container: {
    height: Constants.SCREEN_HEIGHT,
    width: Constants.SCREEN_WIDTH,
  },
  circleAvtar: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: Colors.secondary,
  },

  sendContain: {
    marginVertical: 40,
    flexDirection: 'row',
  },

  sendbtn: {
    right: 80,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
