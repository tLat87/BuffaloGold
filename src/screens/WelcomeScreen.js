// WelcomeScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';

const screens = [
    {
        image: require('../assets/img/rrr.png'),
        title: 'Welcome to Buffalo Echoes.',
        description: 'Explore the tradition, rhythm and elegance of the arena.',
    },
    {
        image: require('../assets/img/12rrr.png'),
        title: 'Step into the world’s most iconic arenas',
        description: 'Each one tells a story through architecture, people and history.',
    },
    {
        image: require('../assets/img/image.png'),
        title: 'Discover the legacy of great matadors',
        description: 'Understand the symbolism, style and cultural depth of their art.',
    },
    {
        image: require('../assets/img/r2r2.png'),
        title: 'Rituals, music, heritage',
        description: 'Dive into a world where movement meets meaning.',
    },
];

const WelcomeScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const theme = useSelector(state => state.theme.theme);
    const handleNext = () => {
        if (index < screens.length - 1) {
            setIndex(index + 1);
        } else {
            navigation.replace('MainTab'); // Переход на главный экран
        }
    };

    const current = screens[index];

    return (
        <View style={styles.container}>
            <Image source={current.image} style={styles.image} resizeMode="cover" />
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>{current.title}</Text>
                <Text style={styles.description}>{current.description}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004527',
    },
    image: {
        width: '100%',
        height: '50%',
    },
    bottomContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'serif',
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#FF9D12',
        paddingVertical: 12,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#1C120D',
        fontWeight: 'bold',
    },
});
``
