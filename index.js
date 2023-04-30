import { Image, View, Text, Button } from "react-native";
import styles from "./styles";

export default function Filme({ data }) {

    const uri = data.attributes.poster.data.attributes.url;
    const uriConcatenada = "https://api.otaviolube.com" + uri;


    return (

        <View style={styles.container}>
            <Text style={styles.titulo}> {data.attributes.titulo} </Text>
            <Image source={{ uri: uriConcatenada }} style={styles.img} />
            <Text style={styles.sinopse}> {data.attributes.sinopse} </Text>
            <View style={styles.button}>
                <Button
                    title="COMPRAR"
                    color="green"
                ></Button>
            </View>
        </View>
    );
}