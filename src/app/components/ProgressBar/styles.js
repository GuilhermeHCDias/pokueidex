import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    progressBarContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    progressBar: {
        width: '100%',
        height: 5,
        backgroundColor: '#cacacf',
        borderRadius: 5,
    },
    activeProgressBar: {
        height: 5,
        borderRadius: 5,
    },
    titleContainer: {
        justifyContent: 'center',
        width: 100,
    },
    progressBarTitle: {
        fontSize: 12,
    },
    progressValueContainer: {
        fontSize: 12,
        color: '#3b3b3b',
        fontWeight: 'bold',
        justifyContent: 'center',
        width: 50,
    },
});
