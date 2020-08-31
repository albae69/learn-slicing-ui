import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
  },
  title: {
    fontSize: 39,
    fontFamily: 'RedHatDisplay-Bold',
    padding: 16,
  },
  chatContainer: {
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  photo: {
    height: 60,
    width: 60,
  },
  wrapName: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold',
    color: '#120E21',
  },
  msg: {
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 13,
    color: '#99879D',
  },
  icon: {position: 'absolute', right: 25},
});
