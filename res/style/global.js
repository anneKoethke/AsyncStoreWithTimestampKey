import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7', // flatUiColors Silver
  },
  titleText: {
    backgroundColor: '#2c3e50', // flatUiColors Midnight Blue
    color: 'white',
    fontSize: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 17,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  p: {
    color: '#2c3e50',
  },
  innerContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  firstInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondInputRow: {},
  input: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    marginTop: 5,
    padding: 7,
    minWidth: 50,
  },
  titleInput: {
    minWidth: 330,
  },
  btn: {
    backgroundColor: '#2c3e50', // flatUiColors Midnight Blue
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    minWidth: 120,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    fontSize: 16,
    textAlign: 'center',
  },
  cardView: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    padding: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});