import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: '#FAF9FE',
  },
  feed: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 39,
    padding: hp('2%'),
    margin: 0,
  },
  resume: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 25,
    paddingLeft: hp('2%'),
  },
  charts: {
    width: wp('100%'),
    marginTop: hp('2%'),
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('3%'),
  },
  activeProject: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
  },
  viewBtn: {
    backgroundColor: '#FBEAFF',
    height: 35,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 16,
  },
  projectContainer: {
    alignItems: 'center',
  },
});
