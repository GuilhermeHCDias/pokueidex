import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Touchable } from 'components';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';

export function Header({ title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <Touchable onPress={() => navigation.goBack()}>
                <View style={styles.backButtonContainer}>
                    <SvgUri
                        width={20}
                        height={20}
                        source={require('assets/images/left-arrow-black.svg')}
                    />
                </View>
            </Touchable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
