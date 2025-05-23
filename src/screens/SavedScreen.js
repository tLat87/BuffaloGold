import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';

const SavedScreen = ({ navigation }) => {
    const savedArenas = useSelector((state) => state.arenas.savedArenas);
    const theme = useSelector(state => state.theme.theme);
    const backgroundImage = theme === 'light'
        ? require('../assets/img/image3.png')
        : require('../assets/img/fqw.jpg');
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                {savedArenas.length === 0 ? (
                    <View  style={styles.card2}>
                        <Text style={styles.arenaName}>No saved arenas yet</Text>
                     </View>
                ) : (
                    savedArenas.map((arena, index) => (
                        <View key={index} style={styles.card}>
                            <Image
                                source={{ uri: arena.image }}
                                style={styles.arenaImage}
                            />
                            <Text style={styles.arenaName}>{arena.name}</Text>
                            <Text style={styles.location}>📍 {arena.location}</Text>
                            <Text style={styles.coordinates}>
                                📌 Coordinates: {arena.coordinates}
                            </Text>
                            <View style={styles.buttonRow}>
                                <TouchableOpacity
                                    style={styles.openButton}
                                    onPress={() => navigation.navigate('ArenaMoreScreen', { item: arena })}
                                >
                                    <Text style={styles.openText}>Open</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Image source={require('../assets/img/1231.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
        </ImageBackground>
    );
};


export default SavedScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: '#023804',
        padding: 16,
        marginTop: 40,
        alignItems: 'center',
    },
    card2: {
        backgroundColor: '#023804',
        padding: 16,
        marginTop: 100,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'JainiPurva-Regular',
        marginBottom: 10,
    },
    arenaImage: {
        width: '100%',
        height: 180,
        marginBottom: 15,
    },
    arenaName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'JainiPurva-Regular',
        textAlign: 'center',
    },
    location: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    coordinates: {
        color: 'white',
        fontSize: 14,
        marginBottom: 15,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    openButton: {
        backgroundColor: '#F6A530',
        paddingVertical: 10,
        paddingHorizontal: 24,
    },
    openText: {
        color: '#1C120D',
        fontWeight: 'bold',
    },
    iconButton: {

    },
    fullButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    fullButtonText: {
        color: '#1C120D',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
