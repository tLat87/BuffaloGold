import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import MatadorsScreen from '../screens/MatadorsScreen';
import EchoesScreen from '../screens/EchoesScreen';
import SavedScreen from '../screens/SavedScreen';
import CultureScreen from '../screens/CultureScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, label, iconSource }) => (
    <View style={[styles.tabItem, focused && styles.tabItemActive]}>
        <Image source={iconSource} style={styles.icon} />
        {focused && <Text style={styles.tabLabel}>{label}</Text>}
    </View>
);

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    width: '90%',
                    marginLeft: '5%',
                    backgroundColor: '#6a1414',
                    height: 80,
                    borderWidth: 3,
                    borderColor: '#713a00',
                    paddingTop: 20,
                    paddingBottom: 8,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="CultureScreen"
                component={CultureScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            label="Culture"
                            iconSource={require('../assets/img/fqwf.png')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="EchoesScreen"
                component={EchoesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            label="Echoes"
                            iconSource={require('../assets/img/fwqffqwf.png')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            label="Home"
                            iconSource={require('../assets/img/mdi_arena.png')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MatadorsScreen"
                component={MatadorsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            label="Matadors"
                            iconSource={require('../assets/img/ffqwww.png')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="SavedScreen"
                component={SavedScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            label="Saved"
                            iconSource={require('../assets/img/iconoir_bookmark-solid.png')}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    tabItemActive: {
        backgroundColor: '#F98C0B',
    },
    icon: {
        width: 24,
        height: 24,
        marginTop: -10,
        resizeMode: 'contain',
    },
    tabLabel: {
        fontFamily: 'JainiPurva-Regular',
        fontSize: 12,
        color: '#401C07',
        fontWeight: 'bold',
        marginTop: 0,
        position: 'absolute',
        bottom: 4
    },
});

export default MainTabNavigator;
