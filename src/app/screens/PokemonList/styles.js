import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    row: {
        justifyContent: 'space-between',
    },
    pokeItemContainer: {
        width: 180,
        marginBottom: 20,
        flex: 1,
    },
    flatListSafeArea: {
        height: screenHeight - 120,
    },
});
