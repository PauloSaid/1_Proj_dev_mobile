import React, { useState, useRef } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles';

export default function SearchBox() {
    const [searchResults, setSearchResults] = useState([]); // armazenar os resultados da busca
    const [showText, setShowText] = useState(false); // exibir texto somente após a busca
    const inputRef = useRef();

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.otaviolube.com/api/filmes?populate=*&search=${inputRef.current.value}`
            );
            const filmes = response.data.data; // obtém o array de filmes da resposta
            setSearchResults(filmes);
            setShowText(true); // mostra o texto após a busca ser concluída
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.searchContainer}>
            <Text style={styles.headerBox}>Digite o nome do filme</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    ref={inputRef}
                    style={styles.searchInput}
                    placeholder="Pesquisar"
                    placeholderTextColor="#aaa"
                    onSubmitEditing={handleSearch}
                />
            </View>
            <View style={styles.checar}>
                <Button title="CHECAR"
                    onPress={handleSearch}
                    color="gray"
                />
            </View>
            {showText && Array.isArray(searchResults) && searchResults
                .filter(
                    (filme) =>
                        filme.attributes.titulo.toLowerCase() ===
                        inputRef.current.value.toLowerCase()
                )
                .map((filme) => (
                    <Text key={filme.id} style={styles.status}>
                        O filme "{filme.attributes.titulo}" está disponível! ✅
                    </Text>
                ))}
            {showText && Array.isArray(searchResults) &&
                searchResults
                    .filter(
                        (filme) =>
                            filme.attributes.titulo.toLowerCase() !==
                            inputRef.current.value.toLowerCase()
                    )
                    .length === searchResults.length && <Text style={styles.status}>O filme não está no cartaz. ❌</Text>}
        </View>
    );
}