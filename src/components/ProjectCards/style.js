import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    height: 100,
    width: wp('90%'),
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  title: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 20,
  },
  wrapStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
  },
});
