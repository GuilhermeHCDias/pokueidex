/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    resolver: {
        // extraNodeModules: require('node-libs-react-native'),
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
