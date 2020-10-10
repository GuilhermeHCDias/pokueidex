import React from 'react';
import { Text, View } from 'react-native';
import { ProgressBar } from 'components';
import styles from '../styles';

export function BaseStats({ stats }) {
    console.log('stats :>> ', stats);
    return (
        <View>
            {stats.map(status => (
                <View>
                    <ProgressBar title={status.stat.name} progressValue={status.base_stat} />
                </View>
            ))}
        </View>
    );
}
