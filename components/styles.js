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
    },
    searchContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
      },
      searchBox: {
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#000',
      },
});


export default styles;
