import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatlist: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerItem: {
    height: 100,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  imageItem: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  inputItem: {
    flex: 1,
    borderWidth: 1,
    borderBottomColor: '#ffffff',
  },
  textItem: {
    fontSize: 20,
    color: '#ffff',
    marginLeft: 20,
    fontWeight: '600',
  },
  textTimeItem: {
    fontSize: 15,
    color: '#ffff',
    textAlign: 'right',
    marginRight: 20,
  },
  containeruserJoined: {
    display: 'flex',
    marginLeft: 20,
    justifyContent: 'center',
  },
  textuserJoined: {
    color: '#0000FF',
    fontSize: 18,
    width: 200,
    fontWeight: '500',
  },
  containerMessage: {
    marginLeft: 20,
    width: 250,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 280,
  },
  textmessage: {
    color: '#fff',
    fontSize: 15,
    width: 200,
    fontWeight: '300',
  },
  numberMessage: {
    fontSize: 15,
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#0000FF',
    paddingVertical: 2,
    height: 30,
    textAlign: 'right',
  },
});

export default styles;
