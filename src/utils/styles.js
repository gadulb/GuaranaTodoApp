import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C5E6C6',
      alignItems: 'center',
      gap: 20,
    },
    box:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        margin: 20,
        padding: 20,
        paddingVertical: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        gap: 20,
        justifyContent: "flex-start",
        width: '80%',
        maxWidth: 300,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        
        color: 'black',
        fontWeight:"700",
        
    },
    input: {
        height: 50,
        width: "100%",
        fontSize: 17,
        padding: 10,
        alignSelf: 'stretch',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        borderStyle: 'none',
        borderWidth: 1,
        backgroundColor: 'white',
        marginVertical: 12,
    },
    botao: {
        fontSize: 17,
        padding: 0,
        paddingHorizontal: 30,
        backgroundColor: '#C5E6C6',
        borderBottomColor: 'black',
        boxShadow: 'black 5px 5px 0 0px',
        borderRadius: 10,
        alignSelf: 'center',
    },
});