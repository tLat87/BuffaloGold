import React, {useEffect, useState} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';
import Share from 'react-native-share';

const data = [
    {
        "name": "Plaza de Toros de Las Ventas",
        "location": "Madrid, Spain",
        "image": require('../assets/img/9b015653fa613c41400a672f6b482126bab03754.png'),
        "coordinates": "40.4320° N, 3.6630° W",
        "description": "A true icon of Spanish architecture and heritage, Las Ventas is the largest bullring in Spain and one of the most recognized in the world. Known for its Neo-Mudéjar style, it represents the heart of Madrid’s traditional festivities."
    },
    {
        "name": "Plaza de Toros de la Maestranza",
        "location": "Seville, Spain",
        "image": require('../assets/img/59ffcfbef3bd959f3ec015cd0f0718887f95d212.png'),
        "coordinates": "37.3861° N, 5.9961° W",
        "description": "One of the oldest and most elegant bullrings in Spain. Located near the Guadalquivir River, this arena is deeply embedded in Andalusian culture and showcases the ceremonial grace of the tradition."
    },
    {
        "name": "Plaza de Toros de Ronda",
        "location": "Ronda, Spain",
        "image": require('../assets/img/19887a279d6a844a83ab2d7a6ab4b8dd5a599a45.png'),
        "coordinates": "36.7419° N, 5.1671° W",
        "description": "Considered one of the cradles of bullfighting tradition, this 18th-century arena is admired for its classical circular design and serene setting in the hills of southern Spain."
    },
    {
        "name": "Plaza de Toros de Valencia",
        "location": "Valencia, Spain",
        "image": require('../assets/img/c5fda9efa3e86d581cbc24480d4cfc6bad95fffe.png'),
        "coordinates": "39.4651° N, 0.3764° W",
        "description": "A cultural venue that blends Roman-inspired architecture with vibrant local festivities. It has hosted not only traditional events but also concerts and exhibitions."
    },
    {
        "name": "Plaza de Toros de Zaragoza (La Misericordia)",
        "location": "Zaragoza, Spain",
        "image": require('../assets/img/fda3036820aae29bb49287ea2f480eb9187a87cc.png'),
        "coordinates": "41.6488° N, 0.8891° W",
        "description": "This historic arena plays a significant role in Zaragoza’s festivals and is recognized for its unique octagonal structure and ornate façade."
    },
    {
        "name": "Plaza de Toros de Pamplona",
        "location": "Pamplona, Spain",
        "coordinates": "42.8185° N, 1.6432° W",
        "image": require('../assets/img/d7ca499ea069ce4e88bc966ae0377cbb2cf8bcd1.png'),
        "description": "Famous globally for the San Fermín festival and the running of the bulls. The arena marks the final destination of the traditional run and holds deep cultural significance."
    },
    {
        "name": "Arènes de Nîmes",
        "location": "Nîmes, France",
        "image": require('../assets/img/bd51a4d7f2c5cace6dd85c2b15bbfac9041977cc.png'),
        "coordinates": "43.8340° N, 4.3601° E",
        "description": "An ancient Roman amphitheater still in use today for cultural events and festivals. It bridges classical architecture with Iberian tradition in a remarkable way."
    },
];

const HomeScreen = ({ navigation }) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const [item, setRandomArena] = useState(data[randomIndex]);



    const handleShare = async () => {
        const shareOptions = {
            message:
                'Check out the arena of the day: Plaza de Toros de Las Ventas 📍 Madrid, Spain\n📌 Coordinates: 40.4320° N, 3.6630° W',
            url: 'https://www.example.com/arena/las-ventas',
            title: 'Arena of the Day',
        };

        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };


    return (
        <ImageBackground
            source={require('../assets/img/image3.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Arena of the day:</Text>
                    <Image
                        source={item.image }
                        style={styles.arenaImage}
                    />
                    <Text style={styles.arenaName}>{item.name}</Text>
                    <Text style={styles.location}>📍 {item.location}</Text>
                    <Text style={styles.coordinates}>📌 Coordinates: {item.coordinates}</Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => navigation.navigate('ArenaMoreScreen', { item })}
                        >
                            <Text style={styles.openText}>Open</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
                            <Image source={require('../assets/img/1231.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.fullButton}
                    onPress={() => navigation.navigate('AllArenasScreen', {data})}
                >
                    <Image source={require('../assets/img/foundation_list.png')} />
                    <Text style={styles.fullButtonText}> View all arenas</Text>
                </TouchableOpacity>

                {/*<TouchableOpacity*/}
                {/*    style={styles.fullButton}*/}
                {/*    onPress={() => navigation.navigate('MapScreen')}*/}
                {/*>*/}
                {/*    <Image source={require('../assets/img/material-symbols_map.png')} />*/}
                {/*    <Text style={styles.fullButtonText}> Open map of arenas</Text>*/}
                {/*</TouchableOpacity>*/}
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 16,
        paddingTop: '20%',
    },
    card: {
        backgroundColor: '#3D1F12',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 16,
        marginTop: 40,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'JainiPurva-Regular',
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    arenaImage: {
        width: '100%',
        height: 180,
        borderRadius: 15,
        marginBottom: 15,
    },
    arenaName: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'JainiPurva-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlign: 'center',
    },
    location: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    coordinates: {
        color: 'white',
        fontSize: 14,
        marginBottom: 15,
        alignSelf: 'flex-start',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    openButton: {
        backgroundColor: '#F6A530',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        borderRadius: 15,
    },
    openText: {
        color: '#1C120D',
        fontFamily: 'JainiPurva-Regular',
        fontWeight: 'bold',
    },
    iconButton: {

    },
    fullButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    fullButtonText: {
        color: '#1C120D',
        fontSize: 16,
        fontFamily: 'JainiPurva-Regular',
        fontWeight: 'bold',
    },
});
