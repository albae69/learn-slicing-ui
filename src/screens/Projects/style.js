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
  listProject: {
    width: wp('100%'),
    borderColor: '#99879D',
    borderBottomWidth: 1,
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalTitle: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 20,
  },
  wrapTotalNumber: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalNumber: {
    fontSize: 40,
    fontFamily: 'RedHatDisplay-Bold',
  },
  details: {
    fontFamily: 'RedHatDisplay-Bold',
    marginTop: 32,
    padding: 16,
    fontSize: 20,
    color: '#99879D',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    marginTop: 20,
  },
  wrapListProjects: {
    borderTopWidth: 1,
    borderColor: '#99879D',
  },
});
