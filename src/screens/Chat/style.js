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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    height: 100,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    marginTop: -20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  photo: {
    height: 40,
    width: 40,
  },
  name: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 25,
    marginLeft: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
