import React from 'react';
import { Image, Text, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { TYPE_COLORS } from 'app/app-constants';
import { Chip, TabView } from 'components';
import { About, BaseStats, Evolution, Moves } from './Tabs';
import styles from './styles';

export function Details({ navigation, route }) {
    const { pokemon } = route.params;
    const { types, name, id, sprites, stats } = pokemon;
    const TABS = {
        About: <About />,
        'Base Stats': <BaseStats stats={stats} />,
        Evolution: <Evolution />,
        Moves: <Moves />,
    };

    return (
        <View style={styles.mainContent}>
            <View
                style={{
                    ...styles.header,
                    backgroundColor: TYPE_COLORS[pokemon.types[0].type.name],
                }}
            >
                <SafeAreaView>
                    <View style={styles.headerContent}>
                        <View style={styles.actionButtonsContainer}>
                            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                                <Image
                                    style={styles.backButton}
                                    source={require('assets/images/left-arrow-white.png')}
                                />
                            </TouchableWithoutFeedback>
                            <Image
                                style={styles.heartButton}
                                source={require('assets/images/heart.png')}
                            />
                        </View>
                        <View style={styles.infoHeaderContent}>
                            <View style={styles.pokemonNameContainer}>
                                <Text style={styles.pokemonName}>{name}</Text>
                                <View style={styles.chipContainer}>
                                    {types.map((type, index) => (
                                        <View style={{ marginRight: 10 }} key={`type-${index}`}>
                                            <Chip variation="big" title={type.type.name} />
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <Text style={styles.pokemonId}>{`#${id}`}</Text>
                        </View>
                        <View style={styles.pokeballContainer}>
                            <SvgUri
                                width={120}
                                height={120}
                                source={require('assets/images/pokeball.svg')}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <View style={styles.paper}>
                <View style={styles.pokemonImageContainer}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: sprites.other['official-artwork'].front_default }}
                    />
                </View>
                <View style={styles.tabContent}>
                    <TabView tabs={TABS} />
                </View>
            </View>
        </View>
    );
}
