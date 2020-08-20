import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: 'red',
  },
  count: {
    fontFamily: 'Nunito-Bold',
    fontSize: 50,
  },
});
