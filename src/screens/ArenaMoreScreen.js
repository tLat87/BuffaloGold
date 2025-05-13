import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground, Alert,
} from 'react-native';
import Share from 'react-native-share';
import {addArena, removeArena} from '../redux/slices/arenasSlice';
import {useDispatch, useSelector} from 'react-redux';

const ArenaMoreScreen = ({ navigation, route }) => {
    const {item} = route.params;

    const savedArenas = useSelector(state => state.arenas.savedArenas);
    const isArenaSaved = savedArenas.some(arena => arena.name === item.name);

    const dispatch = useDispatch();

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

    const handleToggleSave = () => {
        if (isArenaSaved) {
            dispatch(removeArena(item.name));
            Alert.alert('Removed', 'Arena removed from saved list.');
        } else {
            dispatch(addArena(item));
            Alert.alert('Saved', 'Arena saved successfully!');
        }
    };

    return (
      <ImageBackground
        source={require('../assets/img/image3.png')}
        style={styles.background}
        resizeMode="cover">
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../assets/img/4124214.png')} />
          </TouchableOpacity>
          <View style={styles.card}>
            <Image source={item.image} style={styles.arenaImage} />
            <Text style={styles.arenaName}>{item.name}</Text>
            <Text style={styles.location}>📍 {item.location}</Text>
            <Text style={styles.coordinates}>
              📌 Coordinates: {item.coordinates}
            </Text>
            <Text style={styles.coordinates}>
                {item.description}
            </Text>
            {/*<Image*/}
            {/*  source={require('../assets/img/image99.png')}*/}
            {/*  style={{marginBottom: 20}}*/}
            {/*/>*/}
            <View style={styles.buttonRow}>
                {/*<TouchableOpacity style={styles.openButton}>*/}
                {/*    <Text style={styles.openText}>Set route</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={handleShare}
                >
                    <Image source={require('../assets/img/1231.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={handleToggleSave}>
                    <Image source={require('../assets/img/4124.png')} />
                </TouchableOpacity>
            </View>
          </View>
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
        fontFamily: 'serif',
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
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontFamily: 'JainiPurva-Regular',
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
        fontWeight: 'bold',
    },
});


export default ArenaMoreScreen
