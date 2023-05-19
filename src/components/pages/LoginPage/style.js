import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        backgroundColor: 'black',
    },
})

export default styles;