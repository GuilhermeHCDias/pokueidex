import React, { useState, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { Touchable } from 'components';
import styles from './styles';

export function TabView({ tabs }) {
    const firstTab = Object.keys(tabs)[0];
    const [activeTab, setActiveTab] = useState(firstTab);
    const tabTitleList = Object.keys(tabs);
    const animatableViewRef = useRef(null);

    const changeTab = tabPressed => {
        const tabPressedIndex = tabTitleList.indexOf(tabPressed);
        const activeTabIndex = tabTitleList.indexOf(activeTab);
        const animationSide = tabPressedIndex > activeTabIndex ? 'Right' : 'Left';
        if (animatableViewRef.current)
            animatableViewRef.current.animate(`bounceIn${animationSide}`);
        setActiveTab(tabPressed);
    };

    return (
        <View>
            <View style={styles.tabHeader}>
                <View style={styles.titleContainer}>
                    {Object.keys(tabs).map(tabName => {
                        const isSameTab = activeTab === tabName;
                        return (
                            <Touchable key={tabName} onPress={() => changeTab(tabName)}>
                                <Text
                                    style={{
                                        color: isSameTab ? '#3b3b3b' : '#cacacf',
                                        fontWeight: isSameTab ? 'bold' : 'normal',
                                    }}
                                >
                                    {tabName}
                                </Text>
                            </Touchable>
                        );
                    })}
                </View>
                <View style={styles.horizontalLine}></View>
            </View>
            <AnimatableView ref={animatableViewRef} style={styles.tabContainer}>
                {tabs[activeTab]}
            </AnimatableView>
        </View>
    );
}
