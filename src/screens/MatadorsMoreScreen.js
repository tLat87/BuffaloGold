import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import Share from 'react-native-share';
import {useSelector} from 'react-redux';

const MatadorsMoreScreen = ({ navigation, route }) => {
    const theme = useSelector(state => state.theme.theme);
    const {matador} = route.params;

    const handleOpenWikipedia = () => {
        Linking.openURL(matador.wikipedia);
    };
    const backgroundImage = theme === 'light'
        ? require('../assets/img/image3.png')
        : require('../assets/img/fqw.jpg');
    const handleShare = async () => {
        const shareOptions = {
            title: `Matador of the Day: ${matador.name}`,
            message:
                `🐂 Matador Spotlight: ${matador.name}\n\n` +
                `📍 Country: ${matador.country}\n` +
                `🕰 Active: ${matador.activeYears}\n` +
                `💡 Known for: ${matador.knownFor}\n` +
                `📖 Read more on Wikipedia:\n${matador.wikipedia}`,
            url: matador.wikipedia,
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
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source={require('../assets/img/4124214.png')}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Matador info</Text>
            </View>

            <View style={styles.card}>
                <Image
                    source={matador.image}
                    style={styles.matadorImage}
                />
                <Text style={styles.name}>{matador.name}</Text>
                <Text style={styles.subInfo}>🇪🇸 {matador.country} | Active: {matador.activeYears}</Text>

                <Text style={styles.label}>
                    <Text style={styles.bold}>Known for: </Text>
                    {matador.knownFor}
                </Text>

                <Text style={styles.label}>
                    <Text style={styles.bold}>Style: </Text>
                    {matador.style}
                </Text>

                <Text style={styles.label}>
                    <Text style={styles.bold}>Legacy: </Text>
                    {matador.legacy}
                </Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={styles.wikiButton}
                        onPress={handleOpenWikipedia}
                    >
                        <Text style={styles.wikiText}>𝕎 Open on Wikipedia</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sendButton} onPress={handleShare}>
                        <Text style={styles.sendIcon}>➤</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 60,
        marginLeft: 20,
    },
    backButton: {
        backgroundColor: '#331F0F',
        padding: 12,

        marginRight: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
    backIcon: {
        color: 'white',
        fontSize: 18,
    },
    headerTitle: {
        backgroundColor: '#331F0F',
        color: 'white',
        fontFamily: 'JainiPurva-Regular',
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 12,

        width: '75%',
    },
    card: {
        backgroundColor: '#023804',
        margin: 20,
        padding: 20,

        marginTop: 30,
        borderWidth: 2,
        borderColor: '#fff',
    },
    matadorImage: {
        width: 140,
        height: 140,

        alignSelf: 'center',
        marginBottom: 15,
    },
    name: {
        color: 'white',
        fontFamily: 'JainiPurva-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 5,
    },
    subInfo: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'center',
        marginBottom: 15,
    },
    label: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        gap: 10,
    },
    wikiButton: {
        backgroundColor: '#7DAAF5',
        padding: 12,
        flex: 1,

        alignItems: 'center',
    },
    wikiText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'JainiPurva-Regular',
    },
    sendButton: {
        backgroundColor: 'white',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    sendIcon: {
        fontSize: 20,
    },
});

export default MatadorsMoreScreen;
