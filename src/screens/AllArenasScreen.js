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
import {useSelector} from 'react-redux';


const AllArenasScreen = ({ navigation, route}) => {
    const theme = useSelector(state => state.theme.theme);
    const {data} = route.params;
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
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source={require('../assets/img/4124214.png')}/>
                </TouchableOpacity>

                {
                    data.map((item, index) => (
                        <View style={styles.card}>
                            <Image
                                source={item.image}
                                style={styles.arenaImage}
                            />
                            <Text style={styles.arenaName}>{item.name}</Text>
                            <Text style={styles.location}>📍 {item.location}</Text>
                            <Text style={styles.coordinates}>
                                📌 Coordinates: {item.coordinates}
                            </Text>
                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={styles.openButton} onPress={()=>{navigation.navigate('ArenaMoreScreen', {item})}}>
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
                    ))
                }


            <View style={{marginBottom: 50}}/>
            </ScrollView>
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
    card: {
        backgroundColor: '#023804',
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

export default AllArenasScreen
