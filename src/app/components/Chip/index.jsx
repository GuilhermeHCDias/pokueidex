import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export function Chip({ title, variation = 'default' }) {
    return (
        <View style={variation === 'big' ? styles.big : styles.chip}>
            <Text style={variation === 'big' ? styles.bigTitle : styles.title}>{title}</Text>
        </View>
    );
}
