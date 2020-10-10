import React from 'react';
import { Image, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Chip } from 'components';
import { TYPE_COLORS } from 'app/app-constants';
import styles from './styles';

export function PokeItem({ name, types, image }) {
    const COLOR = TYPE_COLORS[types[0].type.name];
    return (
        <View style={{ ...styles.item, backgroundColor: COLOR }}>
            <Text style={styles.name}>{name}</Text>
            {!!types &&
                types.map((type, index) => (
                    <View key={`${type.type.name}-${index}`} style={styles.chipContainer}>
                        <Chip title={type.type.name} />
                    </View>
                ))}
            <View style={styles.pokeballContainer}>
                <SvgUri width={150} height={150} source={require('assets/images/pokeball.svg')} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
        </View>
    );
}
