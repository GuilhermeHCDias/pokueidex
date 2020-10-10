import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

export function About() {
    return (
        <View>
            <Text style={styles.tabViewTitle}>Breeding</Text>
            <Text style={styles.tabViewSubtitle}>Gender</Text>
        </View>
    );
}
