import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
  },
  notification: {
    height: 100,
    width: wp('100%'),
    backgroundColor: '#9378FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  charge: {
    color: 'white',
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 16,
  },
  deadline: {
    color: 'white',
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 13,
  },
  containerProject: {
    padding: 32,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#120E21',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
    paddingLeft: 10,
  },
  time: {
    color: '#99879D',
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 13,
    marginTop: 24,
  },
  title: {
    color: 'black',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
  },
  desc: {
    color: '#99879D',
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 18,
    marginTop: 10,
  },
  money: {
    fontFamily: 'RedHatDisplay-Bold',
    color: '#9378FF',
    fontSize: 18,
    letterSpacing: 2,
  },
  btnWrap: {
    alignItems: 'center',
  },
  btn: {
    width: wp('70%'),
  },
});
