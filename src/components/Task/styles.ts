import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

      selected: {
      width: '100%',
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      
  },

    name: {
        flex: 1,
        fontSize:  16,
        marginLeft: 16,
        color: "#FFF",
    },

    nameCheck: {
      flex: 1,
      fontSize:  16,
      marginLeft: 16,
      color: "gray",
      textDecorationLine: 'line-through'
    },

    selectText: {
        color: '#4EA8DE',
        fontSize: 32,
      },
  
      select: {
        paddingLeft: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
      },

      
      removeText: {
        color: 'gray',
        fontSize: 32
      },
  
      remove: {
        width : 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
      },


});