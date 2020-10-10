import React, { useRef } from 'react';
import { View as AnimatableView } from 'react-native-animatable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { TouchableWithoutFeedback, View } from 'react-native';

export function Touchable({ onPress, children }) {
    const animatableViewRef = useRef(null);

    const handleOnPress = () => {
        ReactNativeHapticFeedback.trigger('selection');
        animatableViewRef.current && animatableViewRef.current.animate('bounceIn');
        onPress && onPress();
    };

    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <AnimatableView ref={animatableViewRef}>{children}</AnimatableView>
        </TouchableWithoutFeedback>
    );
}
