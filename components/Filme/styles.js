import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d9d9d9',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3,
        borderRadius: 12.5,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: '125%',
    },
    sinopse: {
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        borderTopColor: 'black',
        borderTopWidth: 2.5,
        fontWeight: '500',
    },
    img: {
        width: 200,
        height: 300,
        marginTop: 5,
        marginBottom: 10,
        borderWidth: 3,
        borderRadius: 8.5,
    }
});

export default styles;