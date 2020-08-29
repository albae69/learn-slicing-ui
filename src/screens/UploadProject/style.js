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
  containerProject: {
    padding: 32,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  name: {
    color: '#120E21',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
    paddingLeft: 10,
  },
  title: {
    color: 'black',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 28,
    marginTop: 34,
    marginBottom: 16,
  },
  btnWrap: {
    alignItems: 'center',
  },
  btn: {
    position: 'relative',
    width: wp('70%'),
    height: 50,
    bottom: 20,
  },
  message: {
    height: hp('15%'),
    width: wp('85%'),
    backgroundColor: '#FBEEFF',
    borderRadius: 15,
    marginBottom: 20,
  },
  messageInput: {
    marginLeft: 15,
    marginTop: -20,
  },
  uploadFile: {
    height: 56,
    width: wp('85%'),
    backgroundColor: '#FBEEFF',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25,
  },
  uploadPlaceholder: {
    color: '#99879D',
  },
  file: {
    height: 56,
    width: wp('85%'),
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#99879D',
  },
});
