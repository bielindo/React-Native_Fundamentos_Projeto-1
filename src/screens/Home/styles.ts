import {StyleSheet} from "react-native"


export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      padding: 24,
      fontFamily: "Roboto"
    },
  
    eventName: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: 'gray',
      fontSize: 16
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      fontSize: 16,
      marginRight: 12
     
    },

    buttonText: {
      color : "white",
      fontSize: 24
    },

    button: {
      width : 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center'
    },

    inputFocused: {
      borderWidth: 2,
      borderColor: '#5E60CE'
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      fontSize: 64,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      marginTop: 36,
      marginBottom: 42
    },

    title: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      marginTop: 76,
      marginBottom: 20
    },

    listEmptyText: {
      color: "gray",
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    listEmptyText1: {
      color: "gray",
      fontSize: 14,
      textAlign: 'center'
    },

    to: {
      color: '#4EA8DE',
      fontSize: 64,
      fontWeight: 'bold',
    },

    do: {
      color: '#5E60CE',
      fontSize: 64,
      fontWeight: 'bold',
    },

    criadas: {
      color: '#4EA8DE',
      fontSize: 16,
      fontWeight: 'bold',
    },

    concluidas: {
      color: '#5E60CE',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 'auto' 
    },

    contador: {
      color: '#FFF',
      backgroundColor: 'gray',
      borderRadius: 50,
      textAlign: 'center',
      width: '7%',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 10
      
    },

    contTask: {
      width: '100%',
      flexDirection: 'row',
    },
    line: {
      height: 1, 
      backgroundColor: 'gray', 
      marginVertical: 20, 
    },

    clipboard: {
      marginTop: 50,
      marginBottom: 30,
      height: 95,
      width: '25%',
      textAlign: 'center',
    },

    rocket: {
      width: 32,
      height: 48,
      margin: 20
    }

  });