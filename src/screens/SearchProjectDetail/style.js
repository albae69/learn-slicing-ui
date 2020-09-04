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
  profileContainer: {
    backgroundColor: '#EFEDF0',
    height: hp('10%'),
    borderTopLeftRadius: hp('1%'),
    borderTopRightRadius: hp('1%'),
    padding: hp('2%'),
    paddingLeft: hp('3%'),
  },
  wrapContainer: {padding: 16},
  wrapProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'RedHatDisplay-Medium',
    marginLeft: 8,
    fontSize: 20,
  },
  cardContent: {
    padding: hp('2%'),
  },
  time: {
    fontFamily: 'RedHatDisplay-Regular',
    color: '#99879D',
    marginTop: hp('2%'),
  },
  title: {
    color: 'black',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
    marginBottom: 16,
  },
  description: {
    color: '#99879D',
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    textAlign: 'left',
    letterSpacing: 1,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  total: {
    color: 'rgba(153, 135, 157, 0.64)',
    fontFamily: 'RedHatDisplay-Light',
    fontSize: 14,
    textAlign: 'left',
  },
  price: {
    color: '#9378FF',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 16,
    textAlign: 'left',
    letterSpacing: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 24,
  },
  category: {
    marginLeft: 8,
    height: 25,
    borderWidth: 1,
    padding: 6,
    borderRadius: 4,
    borderColor: '#99879D',
  },
  categoryText: {
    marginTop: -3,
  },
  btn: {alignItems: 'center', marginTop: '10%'},
});
