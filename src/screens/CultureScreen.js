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
import Share from 'react-native-share';
import {toggleTheme} from '../redux/slices/themeSlice';
import {useDispatch, useSelector} from 'react-redux';
const data =[
    {
        "id": 1,
        "title": "The Suit of Lights (Traje de Luces)",
        "icon": "🧥",
        "origin": "18th century Spain",
        "echo": "The ornate matador suit is not a costume — it is a ceremonial armor. Embroidered with gold, tight-fitting, symbolically sacred.",
        "parts": [
            "Chaquetilla – short rigid jacket",
            "Taleguilla – embroidered pants",
            "Montera – black headgear"
        ],
        "colors": {
            "white": "purity",
            "red": "passion",
            "black": "mourning"
        },
        "quote": "You do not wear the suit. You earn it.",
        "note": null,
        "extras": []
    },
    {
        "id": 2,
        "title": "The Cape (Capote & Muleta)",
        "icon": "🧣",
        "origin": "18th century Spain",
        "echo": null,
        "parts": [
            "Capote – the large pink-and-yellow cape used in the early stage",
            "Muleta – smaller red cloth used in the final act"
        ],
        "colors": null,
        "quote": "The cape is not a shield — it is a question.",
        "note": null,
        "extras": [
            "Not to hide — but to guide.",
            "Not for flair — but for rhythm.",
            "The color red is symbolic, not functional (bulls are colorblind)."
        ]
    },
    {
        "id": 3,
        "title": "The Sound of the Arena",
        "icon": "🎼",
        "origin": "17th century Spain",
        "echo": "Pasodoble – ceremonial marches performed by a live brass band.",
        "parts": [
            "España Cañí",
            "El Gato Montés",
            "Gallito"
        ],
        "colors": null,
        "quote": "No drumbeat, no performance. The arena listens before it watches.",
        "note": "Entrance, turns, ovations — the music frames the ritual.",
        "extras": []
    },
    {
        "id": 4,
        "title": "The Order of the Ritual",
        "icon": "🎭",
        "origin": "18th century Spain",
        "echo": "The structure is fixed, sacred.",
        "parts": [
            "El Paseíllo – the entrance parade",
            "Tercio de Varas – initial confrontation",
            "Tercio de Banderillas – technical skill",
            "Tercio de Muerte – the final performance"
        ],
        "colors": null,
        "quote": null,
        "note": "The structure resembles classical theater in tension and climax. Every moment choreographed — yet full of risk.",
        "extras": []
    },
    {
        "id": 5,
        "title": "Posters & Typography",
        "icon": "🎨",
        "origin": "19th century Spain",
        "echo": "Vintage Spanish posters are instantly recognizable — tall serif fonts, hand-painted figures, vibrant contrasts.",
        "parts": [],
        "colors": null,
        "quote": null,
        "note": null,
        "extras": [
            "19th & 20th century designs",
            "Deeply connected with Art Nouveau and Art Deco",
            "Modern artists like Miró and Picasso inspired layouts"
        ]
    },
    {
        "id": 6,
        "title": "The Influence of Flamenco",
        "icon": "💃",
        "origin": "20th century Spain",
        "echo": "In Andalusia, flamenco and tauromachia are spiritual cousins.",
        "parts": [],
        "quote": null,
        "note": null,
        "extras": [
            "Deep voice (cante jondo) echoes the arena’s drama",
            "Dancers’ gestures mirror cape work",
            "Shared roots in Romani and Moorish cultures"
        ]
    }
]




const CultureScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);
    const backgroundImage = theme === 'light'
        ? require('../assets/img/image3.png')
        : require('../assets/img/fqw.jpg');
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
            source={backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerRow}>
                    <View style={styles.headerBox}>
                        <Text style={styles.headerText}>Culture</Text>
                    </View>
                </View>
                {data.map(culture => (
                    <View style={styles.card}>
                        {/*<Image*/}
                        {/*    source={require('../assets/img/one/66b14fe1783705af5cf61e816e298f2c3b80c94b.png')}*/}
                        {/*    style={styles.arenaImage}*/}
                        {/*/>*/}
                        <Text style={styles.arenaName}>{culture.title}</Text>
                        <Text style={styles.location}>{culture.origin}</Text>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.openButton} onPress={()=>{navigation.navigate('CultureMoreScreen', {culture})}}>
                                <Text style={styles.openText}>Open</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={handleShare}
                            >
                                <Image source={require('../assets/img/1231.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <View style={{marginBottom: 120}}/>
            </ScrollView>
            <TouchableOpacity
                onPress={() => dispatch(toggleTheme())}
                style={{
                    position: 'absolute',
                    top: 50,
                    right: 20,
                    backgroundColor: '#F6A530',
                    borderRadius: 30,
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 5,
                }}
            >
                <Text style={{ fontSize: 24, color: '#1C120D' }}>🌓</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 16,
        paddingTop: '20%',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 2,

        borderColor: '#fff'
    },
    backButton: {
        backgroundColor: '#98431a',
        padding: 12,

        marginRight: 10,
    },
    backIcon: {
        color: 'white',
        fontSize: 18,
    },
    headerBox: {
        flex: 1,
        backgroundColor: '#98431a',
        padding: 12,

        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'JainiPurva-Regular',
    },
    card: {
        backgroundColor: '#98431a',

        borderWidth: 2,
        borderColor: '#fff',
        padding: 16,
        marginTop: 40,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'serif',
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    arenaImage: {
        width: '100%',
        height: 180,

        marginBottom: 15,
    },
    arenaName: {
        color: 'white',
        fontFamily: 'JainiPurva-Regular',
        fontSize: 20,
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
        justifyContent: 'flex-start',
        width: '100%',
        gap: 10,
        marginTop: 10,
    },
    openButton: {
        backgroundColor: '#F6A530',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,

    },
    openText: {
        color: '#1C120D',
        fontWeight: 'bold',
        fontFamily: 'JainiPurva-Regular',
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

export default CultureScreen
