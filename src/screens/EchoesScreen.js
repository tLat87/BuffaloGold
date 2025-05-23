import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import Share from 'react-native-share';
import {toggleTheme} from '../redux/slices/themeSlice';
import {useDispatch, useSelector} from 'react-redux';

const stories = [
    {
        "title": "Hemingway's Summer",
        "reference": "The Dangerous Summer by Ernest Hemingway",
        "location": "Spain, 1959",
        "echo": "A literary chronicle of the rivalry between two matadors — Luis Miguel Dominguín and Antonio Ordóñez — framed as a symbolic duel between two styles, two souls.",
        "quote": "There are only three sports: bullfighting, motor racing, and mountaineering; all the rest are merely games.",
        "note": "",
        "impact": "",
        "featured_in": "",
        "notable_works": "",
        "symbolism": ""
    },
    {
        "title": "Picasso’s Bulls",
        "reference": "Pablo Picasso’s Tauromachia series (1957)",
        "location": "France / Spain",
        "echo": "Through a minimalist, abstract style, Picasso portrayed the bull as more than a beast — a symbol of struggle, chaos, and identity.",
        "quote": "",
        "note": "He was raised in Málaga, near a bullring, and painted bulls throughout his life.",
        "impact": "",
        "featured_in": "",
        "notable_works": "",
        "symbolism": ""
    },
    {
        "title": "The Last Silence — Death of Manolete",
        "reference": "",
        "location": "Linares, Spain – 1947",
        "echo": "The legendary matador died in the ring, and the entire country fell silent. His funeral was a national event.",
        "quote": "“Spain lost its last monument,” said an old fan at his burial.",
        "note": "",
        "impact": "Inspired novels, songs, and black-and-white documentaries.",
        "featured_in": "",
        "notable_works": "",
        "symbolism": ""
    },
    {
        "title": "Bullrings in Cinema",
        "reference": "",
        "location": "",
        "echo": "The matador as a mythic archetype — a man of elegance, silence, and inner torment.",
        "quote": "",
        "note": "",
        "impact": "",
        "featured_in": "Talk to Her (Pedro Almodóvar, 2002); Blood and Sand (1941 & 1989); Matador (Almodóvar, 1986)",
        "notable_works": "",
        "symbolism": ""
    },
    {
        "title": "Pasodoble & the Music of Ritual",
        "reference": "",
        "location": "",
        "echo": "The arena begins and ends with music — the rhythm of paso doble marches accompanies each act like a heartbeat.",
        "quote": "",
        "note": "",
        "impact": "",
        "featured_in": "",
        "notable_works": "“España cañí”; flamenco cante jondo (pre-fight ambiance)",
        "symbolism": "Music not for spectacle — but for structure, timing, emotional texture."
    },
    {
        "title": "The Cape in the Wind — A Myth",
        "reference": "",
        "location": "Andalusia (folklore)",
        "echo": "In Andalusian folklore, there’s a tale of a ghostly matador who appears in empty arenas at dusk, practicing alone.",
        "quote": "",
        "note": "Locals say his cape never touches the ground.",
        "impact": "",
        "featured_in": "",
        "notable_works": "",
        "symbolism": "The arena is sacred even when no one watches — its spirit continues to move through sand and silence."
    }
]

const EchoesScreen = ({navigation}) => {
    const theme = useSelector(state => state.theme.theme);
    const handleShareStory = async (story) => {
        const shareOptions = {
            title: `Echoes: ${story.title}`,
            message:
                `🌅 Story: ${story.title}\n\n` +
                (story.location ? `📍 Location: ${story.location}\n` : '') +
                `📝 ${story.echo}\n` +
                (story.reference ? `📚 Reference: ${story.reference}` : ''),
        };

        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.log('Error sharing story:', error);
        }
    };
    const backgroundImage = theme === 'light'
        ? require('../assets/img/image3.png')
        : require('../assets/img/fqw.jpg');
    const dispatch = useDispatch();
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Echoes — Stories That Never Fade</Text>
                </View>

                {stories.map((story) => (
                    <View key={story.id} style={styles.card}>
                        <Text style={styles.title}>{story.title}</Text>
                        <Text style={styles.reference}>{story.echo}</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.readButton} onPress={() => navigation.navigate('EchoMoreScreen', {story})}>
                                <Text style={styles.readText}>Read</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton} onPress={() => handleShareStory(story)}>
                                <Image source={require('../assets/img/1231.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <View style={{marginBottom: 100}}/>
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

export default EchoesScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 16,
        paddingTop: 80,
    },
    header: {
        backgroundColor: '#023804',

        borderColor: '#fff',
        borderWidth: 2,
        padding: 16,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'JainiPurva-Regular',
    },
    card: {
        backgroundColor: '#023804',
        borderColor: '#fff',
        borderWidth: 2,

        padding: 16,
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'JainiPurva-Regular',
        marginBottom: 8,
    },
    reference: {
        color: 'white',
        fontSize: 14,
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 10,
    },
    readButton: {
        backgroundColor: '#F6A530',
        // paddingVertical: 20,
        justifyContent: 'center',
        paddingHorizontal: 24,

    },
    readText: {
        color: '#1C120D',
        fontFamily: 'JainiPurva-Regular',
        fontWeight: 'bold',
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 10,

    },
});
