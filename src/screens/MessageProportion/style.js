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
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    height: hp('10%'),
    width: hp('10%'),
  },
  name: {
    color: '#120E21',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
    paddingLeft: 10,
  },
  projectContainer: {
    padding: 16,
  },
  messageBoxContainer: {
    alignItems: 'center',
    paddingTop: 16,
  },
  messageBox: {
    height: 240,
    width: wp('95%'),
    backgroundColor: '#FBEEFF',
    borderRadius: 10,
    paddingLeft: 5,
  },
});
