import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D4D9',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3,
        borderRadius: 12.5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        maxWidth: MAX_WIDTH * 0.8,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: MAX_WIDTH * 0.05,
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
        width: MAX_WIDTH * 0.4,
        height: MAX_HEIGHT * 0.4,
        marginTop: 5,
        marginBottom: 10,
        borderWidth: 3,
        borderRadius: 8.5,
        maxWidth: MAX_WIDTH * 0.8,
        maxHeight: MAX_HEIGHT * 0.5,
    },
    button: {
        marginBottom: 10,
    },
});

export default styles;