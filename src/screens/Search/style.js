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
  search: {
    padding: 16,
    marginTop: hp('3%'),
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 39,
  },
  textInputContainer: {
    alignItems: 'center',
    height: 45,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: 345,
    height: 45,
    borderRadius: 8,
    borderColor: '#99879D',
  },
});
