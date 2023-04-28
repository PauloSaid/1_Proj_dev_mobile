import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3c6e71',
        width: "100%",
        height: "100%",
    },
    header: {
        textAlign: 'center',
        backgroundColor: '#3c6e71'
    },
    headerText: {
        color: '#A49E8D',
        backgroundColor: '#353535',
        width: '100%',
        fontSize: '300%',
    },
    subHeader: {
        backgroundColor: '#8F8778',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    subHeaderText: {
        fontSize: '125%',
        fontWeight: '500',
    },
    filmes: {
        backgroundColor: "#3c6e71",
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        flex: 1,
    }
});


export default styles;
