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
  imageBackground: {
    height: hp('100%'),
    width: wp('100%'),
    resizeMode: 'cover',
    alignItems: 'center',
  },
  image: {
    margin: 0,
  },
  companyTitle: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'RedHatDisplay-Medium',
    position: 'relative',
  },
  text: {
    width: wp('60%'),
    textAlign: 'center',
    position: 'absolute',
    bottom: hp('20%'),
  },
  slide: {
    height: hp('100%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
