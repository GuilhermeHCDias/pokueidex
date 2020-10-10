import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Header, PokeItem, Touchable } from 'components';
import { getPokemons, getPokemonByUrl } from 'services/PokeRequest';
import styles from './styles';

export function PokemonList({ navigation }) {
    const [pokemons, setPokemons] = useState([]);
    const limit = 20;
    const [offset, setOffset] = useState(0);

    const _getPokemons = async _offset => {
        setOffset(offset + 20);
        const response = await getPokemons(limit, _offset);
        let _pokemons = [];
        for (let i = 0; i < response.results.length; i++) {
            const element = response.results[i];
            const pokemon = await getPokemonByUrl(element.url);
            _pokemons.push(pokemon);
        }
        setPokemons([...pokemons, ..._pokemons]);
    };

    const renderItem = ({ item }) => {
        return (
            <Touchable onPress={() => navigation.navigate('Details', { pokemon: item })}>
                <View style={styles.pokeItemContainer}>
                    <PokeItem
                        types={item.types}
                        image={item.sprites.other['official-artwork'].front_default}
                        name={item.name}
                    />
                </View>
            </Touchable>
        );
    };
    useEffect(() => {
        _getPokemons();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Header title="Pokemon List" />
            </SafeAreaView>
            <View style={{ paddingHorizontal: 10, width: '100%' }}>
                {/* <Image
                    width={30}
                    height={30}
                    source={{ uri: 'https://a.top4top.io/p_1990j031.gif' }}
                />
                <LottieView
                    style={{ width: 40, height: 40 }}
                    source={require('assets/animations/pikachu.json')}
                    autoPlay
                    loop
                /> */}
                <View style={styles.flatListSafeArea}>
                    <FlatList
                        columnWrapperStyle={styles.row}
                        numColumns={2}
                        data={pokemons}
                        renderItem={renderItem}
                        onEndReached={() => _getPokemons(offset + 20)}
                        onEndReachedThreshold={0.1}
                        keyExtractor={(item, index) => `${item.id}-${index}`}
                    />
                </View>
            </View>
        </View>
    );
}
