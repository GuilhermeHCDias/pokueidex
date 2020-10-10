import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Details, PokemonList } from 'screens';

const App = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer navigationOptions={{ headerShown: false }}>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PokemonList"
                    component={PokemonList}
                />
                <Stack.Screen options={{ headerShown: false }} name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
