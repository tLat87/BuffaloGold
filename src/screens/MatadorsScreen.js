import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Share from 'react-native-share';
import {toggleTheme} from '../redux/slices/themeSlice';
import {useDispatch, useSelector} from 'react-redux';

const matadors = [
    {
        "name": "Juan Belmonte",
        image: require("../assets/img/people/2c30f8db68b7db83e71ec0113db13f770b899f04.png"),
        "country": "Spain",
        "activeYears": "1910–1935",
        "knownFor": "Reinventing the art of stillness",
        "style": "Calm, motionless, dangerously close to the bull",
        "legacy": "Considered the father of modern bullfighting. Referenced by Hemingway and revered as a reformer.",
        "wikipedia": "https://en.wikipedia.org/wiki/Juan_Belmonte"
    },
    {
        "name": "Manolete (Manuel Laureano Rodríguez)",
        "country": "Spain",
        image: require("../assets/img/people/225b7086957cc53b9968cafedda12449e0c3b01e.png"),
            "activeYears": "1930s–1947",
        "knownFor": "Seriousness, grace under pressure",
        "style": "Upright, dramatic, highly ritualistic",
        "legacy": "A cultural symbol of postwar Spain. His legacy remains deeply mythologized.",
        "wikipedia": "https://en.wikipedia.org/wiki/Manolete"
    },
    {
        "name": "José Tomás",
        "country": "Spain",
        image: require("../assets/img/people/710e416fa652456d33bfad38d2d4bb4e51f5a70c.png"),
        "activeYears": "1995–2019",
        "knownFor": "Deep concentration and minimalism",
        "style": "Silent, meditative, clean cape work",
        "legacy": "Described as “the monk of the arena.” Loved for his mysterious, almost spiritual approach.",
        "wikipedia": "https://en.wikipedia.org/wiki/Jos%C3%A9_Tom%C3%A1s"
    },
    {
        "name": "El Juli (Julián López Escobar)",
        "country": "Spain",
        image: require("../assets/img/people/04648f8f3abed5c1acf756cad4fdae43b86e5bc6.png"),
        "activeYears": "1998–2023",
        "knownFor": "Technical brilliance",
        "style": "Strategic, composed, precise",
        "legacy": "One of the most consistent and successful modern matadors.",
        "wikipedia": "https://en.wikipedia.org/wiki/El_Juli"
    },
    {
        "name": "Cristina Sánchez",
        "country": "Spain",
        image: require("../assets/img/people/04648f8f3abed5c1acf756cad4fdae43b86e5bc6.png"),
        "activeYears": "1993–1999",
        "knownFor": "Breaking barriers",
        "style": "Powerful yet elegant",
        "legacy": "First woman to achieve full status as a professional matador in Spain.",
        "wikipedia": "https://en.wikipedia.org/wiki/Cristina_S%C3%A1nchez"
    },
    {
        "name": "Antonio Ordóñez",
        image: require("../assets/img/people/9152b3bc6dc17519f0249d23d4372ce087906ffb.png"),
        "country": "Spain",
        "activeYears": "1951–1971",
        "knownFor": "Nobility and classicism",
        "style": "Traditional, refined, balanced",
        "legacy": "Central to Hemingway's *The Dangerous Summer*. A true guardian of the art.",
        "wikipedia": "https://en.wikipedia.org/wiki/Antonio_Ord%C3%B3%C3%B1ez"
    }
]


const MatadorsScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);
    const backgroundImage = theme === 'light'
        ? require('../assets/img/image3.png')
        : require('../assets/img/fqw.jpg');
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Matadors</Text>
                </View>

                {matadors.map((matador) => (
                    <View key={matador.id} style={styles.card}>
                        <Image source={matador.image} style={styles.image} />
                        <Text style={styles.name}>{matador.name}</Text>
                        <Text style={styles.info}>🇪🇸 {matador.country} | Active: {matador.activeYears}</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.openButton} onPress={() => {navigation.navigate('MatadorsMoreScreen', {matador})}}>
                                <Text style={styles.openText}>Open</Text>
                            </TouchableOpacity>
                            {/*<TouchableOpacity style={styles.iconButton} onPress={()=>{handleShare(matador)}}>*/}
                            {/*    <Image source={require('../assets/img/1231.png')} />*/}
                            {/*</TouchableOpacity>*/}
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

export default MatadorsScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 16,
        paddingTop: 50,
    },
    header: {
        backgroundColor: '#023804',
        padding: 16,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'JainiPurva-Regular',
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#023804',
        padding: 16,
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'JainiPurva-Regular',
        textAlign: 'center',
    },
    info: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        gap: 10,
    },
    openButton: {
        backgroundColor: '#F6A530',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
        width: '100%',
        alignItems: 'center',
    },
    openText: {
        color: '#1C120D',
        fontFamily: 'JainiPurva-Regular',
        fontWeight: 'bold',
        fontSize: 18,
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 10,
    },
});
