import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerContent: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        position: 'relative',
    },
    header: {
        width: '100%',
        height: 350,
    },
    actionButtonsContainer: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        width: 22,
        height: 22,
    },
    heartButton: {
        width: 22,
        height: 22,
    },
    infoHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pokemonName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'capitalize',
    },
    chipContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    pokemonId: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 'auto',
    },
    pokeballContainer: {
        position: 'absolute',
        width: 30,
        height: 30,
        opacity: 0.2,
        bottom: 10,
        right: 0,
    },
    mainContent: {
        width: '100%',
    },
    paper: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        position: 'relative',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 30,
        backgroundColor: '#FFF',
        marginTop: -30,
    },
    pokemonImageContainer: {
        position: 'absolute',
        top: 0,
        marginLeft: 'auto',
        right: 0,
        bottom: 0,
        marginTop: -150,
        left: 0,
        alignItems: 'center',
    },
    tabContent: {
        marginTop: 60,
    },
});
