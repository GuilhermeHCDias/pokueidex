import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        width: '100%',
        flexBasis: 0,
        height: 120,
        padding: 10,
        position: 'relative',
        justifyContent: 'center',
        borderRadius: 12,
        overflow: 'hidden',
    },
    name: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    chipContainer: {
        marginTop: 6,
        flexDirection: 'row',
    },
    imageContainer: {
        width: 80,
        height: 80,
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginLeft: 'auto',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    pokeballContainer: {
        bottom: -30,
        right: -30,
        position: 'absolute',
        opacity: 0.2,
    },
});
