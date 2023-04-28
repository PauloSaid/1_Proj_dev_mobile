import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./components/styles";
import Filme from "./components/Filme/index";
import SearchBox from "./components/Filme/SearchBox";


export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';



  useEffect(function () {
    fetch(baseURL).then(data => data.json()).then(objeto => {
      setFilmes(objeto.data)
    })
  }, [])





  return (
    <View style={styles.main}>

      <View style={styles.header}>
        <Text style={styles.headerText}>FILMES UVV</Text>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Desenvolvimento Mobile</Text>
        </View>
      </View>

      <SearchBox/>

      <View style={styles.filmes}>
        {filmes.length > 0 ? filmes.map(filme => (
          <Filme data={filme} />
        )
        ) : <Text>Carregando</Text>}
      </View>


    </View >
  );
}