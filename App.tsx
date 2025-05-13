import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MatadorsScreen from "./src/screens/MatadorsScreen";
import CultureScreen from "./src/screens/CultureScreen";
import AllArenasScreen from "./src/screens/AllArenasScreen";
import MapScreen from "./src/screens/MapScreen";
import ArenaMoreScreen from "./src/screens/ArenaMoreScreen";
import CultureMoreScreen from "./src/screens/CultureMoreScreen";
import EchoMoreScreen from "./src/screens/EchoMoreScreen";
import MatadorsMoreScreen from "./src/screens/MatadorsMoreScreen";
const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
    )
}

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013' },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="CultureScreen" component={CultureScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AllArenasScreen" component={AllArenasScreen} options={{ headerShown: false }} />
                        {/*<Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="ArenaMoreScreen" component={ArenaMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CultureMoreScreen" component={CultureMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="EchoMoreScreen" component={EchoMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MatadorsMoreScreen" component={MatadorsMoreScreen} options={{ headerShown: false }} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
