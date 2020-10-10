import { StyleSheet } from 'react-native';

const DEFAULT_CHIP_PROPS = {
    width: 50,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, .3)',
};

const TITLE_DEFAULT_PROPS = {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 10,
};

export default StyleSheet.create({
    chip: {
        ...DEFAULT_CHIP_PROPS,
    },
    big: {
        ...DEFAULT_CHIP_PROPS,
        width: 80,
        height: 25,
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 10,
    },
    bigTitle: {
        ...TITLE_DEFAULT_PROPS,
        fontSize: 12,
    },
});
