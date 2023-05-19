import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#252627',
        width: "100%",
        height: "100%",
    },
    header: {
        textAlign: 'center',
        backgroundColor: '#252627'
    },
    headerText: {
        color: '#A49E8D',
        backgroundColor: '#252627',
        width: windowWidth,
        fontSize: windowWidth * 0.05,
    },
    subHeader: {
        backgroundColor: '#8F8778',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomEndRadius: windowHeight * 0.03,
        borderBottomStartRadius: windowHeight * 0.03,
    },
    subHeaderText: {
        fontSize: windowWidth * 0.03,
        fontWeight: '500',
    },
    filmes: {
        backgroundColor: "#252627",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight,
        flex: 1,
    },
    searchContainer: {
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.0050,
        paddingVertical: windowHeight * 0.0050,
       // backgroundColor: '#D3D4D9',
        marginHorizontal: windowWidth * 0.1,
        marginTop: windowHeight * 0.015,
        flexDirection: 'row'
    },
    searchBox: {
        fontSize: windowWidth * 0.035,
        fontWeight: '400',
        paddingHorizontal: windowWidth * 0.04,
        paddingVertical: windowHeight * 0.02,
    },
    searchInput: {
        backgroundColor: '#FFF9FB',
        color: 'black',
        borderBottomColor: '#FFF9FB',
        borderBottomWidth: windowHeight * 0.003,
        borderRadius: windowHeight * 0.01,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    status: {
        flex: 1,
        textAlign: 'center',
        marginTop: 15,
        color: '#FFF9FB',
    },
    checar: {
        flex: 1,
        alignItems: 'center',
        width: '50%',
        marginTop: 10,
    },
    headerBox: {
        textAlign: 'center',
        color: '#FFF9FB',
        fontWeight: 500,
    },
});

export default styles;