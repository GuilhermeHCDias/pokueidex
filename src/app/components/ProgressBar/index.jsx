import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TYPE_COLORS } from 'app/app-constants';
import styles from './styles';

export function ProgressBar({ maxValue = 255, progressValue, title }) {
    const [activeColor, setActiveColor] = useState(TYPE_COLORS.fire);
    useEffect(() => {
        setActiveColor(getActiveColor());
    }, []);
    const calculateWidthPercent = () => {
        const total = (progressValue * 100) / maxValue;
        console.log(`${total.toFixed(2)}%`);
        return `${total.toFixed(2)}%`;
    };
    const getActiveColor = () => {
        if (progressValue < 60) return TYPE_COLORS.fire;
        if (progressValue > 59 && progressValue <= 100) return TYPE_COLORS.electric;
        if (progressValue > 100 && progressValue < 255) return TYPE_COLORS.grass;
        else return TYPE_COLORS.ice;
    };
    return (
        <View style={styles.progressBarContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.progressBarTitle}>{title}</Text>
            </View>
            <View style={styles.progressValueContainer}>
                <Text color={activeColor}>{progressValue}</Text>
            </View>

            <View style={styles.progressBar}>
                <View
                    style={{
                        ...styles.activeProgressBar,
                        width: calculateWidthPercent(),
                        backgroundColor: activeColor,
                    }}
                ></View>
            </View>
        </View>
    );
}
