import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
  },
  image: {
    // position: 'absolute',
    height: hp('100%'),
    width: wp('100%'),
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyTitle: {
    textAlign: 'center',
    fontSize: 96,
    fontFamily: 'RedHatDisplay-Medium',
    position: 'relative',
    top: -hp('100%') / 5,
    marginTop: hp('20%'),
  },
});
