import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground, Pressable, Modal,
} from 'react-native';
import Share from 'react-native-share';

const CultureMoreScreen = ({navigation, route}) => {
    const {culture} = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);

    const renderHearts = () => {
        return (
            <View style={styles.heartsRow}>
                {[1, 2, 3, 4, 5].map((val) => (
                    <Pressable key={val} onPress={() => setSelectedRating(val)}>
                        <Image
                            source={require('../assets/img/mdi_heart.png')}
                            style={[
                                { opacity: selectedRating >= val ? 1 : 0.3 }
                            ]}
                        />
                    </Pressable>
                ))}
            </View>
        );
    };

    const handleShare = async () => {
        const shareOptions = {
            title: 'Check this out!',
            message: `Have a look at this cultural event: ${culture.title}`,
            url: culture.link || '', // можно использовать поле из объекта culture, если оно есть
        };

        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };


    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>⤺</Text>
          </TouchableOpacity>
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>Culture</Text>
          </View>
        </View>

        <Image
          source={require('../assets/img/one/66b14fe1783705af5cf61e816e298f2c3b80c94b.png')}
          style={styles.mainImage}
        />

        <Text style={styles.title}>{culture.title}</Text>
        <View style={{flexDirection: 'row'}}>
          {culture.origin && (
            <Text style={styles.subText}>{culture.origin}</Text>
          )}
          {culture.icon && <Text style={styles.subText}>{culture.icon}</Text>}
        </View>

        {culture.date && (
          <Text style={styles.subText}>Date: {culture.date}</Text>
        )}

        {culture.echo && (
          <Text style={styles.bodyText}>Echo: {culture.echo}</Text>
        )}

        {culture.parts.length > 0 && (
          <>
            <Text style={styles.partsTitle}>Parts:</Text>
            {culture.parts.map(parts => (
              <Text style={styles.bodyText}>• {parts}</Text>
            ))}
          </>
        )}

        {culture.extras.length > 0 && (
          <>
            <Text style={styles.partsTitle}>Extras:</Text>
            {culture.extras.map(parts => (
              <Text style={styles.bodyText}>• {parts}</Text>
            ))}
          </>
        )}

        {culture.quote &&
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>
              "{culture.quote}"
            </Text>
          </View>
        }
          {culture.note &&
              <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>
                      "{culture.note}"
                  </Text>
              </View>
          }

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.rateButton} onPress={()=>{setModalVisible(true)}}>
            <Text style={styles.rateText}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Image source={require('../assets/img/1231.png')} />
          </TouchableOpacity>
        </View>
          <Modal
              transparent={true}
              visible={modalVisible}
              animationType="fade"
              onRequestClose={() => setModalVisible(false)}
          >
              <View style={styles.modalBackdrop}>
                  <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>Rate this post:</Text>
                      {renderHearts()}
                      <TouchableOpacity
                          style={styles.modalButton}
                          onPress={() => {
                              setModalVisible(false);
                              console.log('User rated:', selectedRating);
                              // можешь тут делать отправку рейтинга на сервер или сохранять
                          }}
                      >
                          <Text style={styles.modalButtonText}>Rate</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </Modal>
      </ScrollView>
    );
};

export default CultureMoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 80,
        backgroundColor: '#1D0E09',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    backButton: {
        backgroundColor: '#3D1F12',
        padding: 12,
        borderRadius: 20,
        marginRight: 10,
    },
    backIcon: {
        color: 'white',
        fontSize: 18,
    },
    headerBox: {
        flex: 1,
        backgroundColor: '#3D1F12',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    mainImage: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginBottom: 16,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'serif',
        marginBottom: 4,
    },
    subText: {
        color: 'white',
        marginBottom: 10,
    },
    bodyText: {
        color: 'white',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 20,
    },
    partsTitle: {
        color: 'white',
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        backgroundColor: '#3D1F12',
        padding: 24,
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 1,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        color: 'white',
        fontSize: 18,
        marginBottom: 16,
        fontFamily: 'JainiPurva-Regular',
    },
    heartsRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    heart: {
        fontSize: 28,
        marginHorizontal: 6,
        color: '#5e3e2c',
    },
    heartSelected: {
        color: '#F6A530',
    },
    modalButton: {
        backgroundColor: '#F6A530',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 15,
    },
    modalButtonText: {
        fontWeight: 'bold',
        color: '#1C120D',
        fontFamily: 'JainiPurva-Regular',
    },
    quoteBox: {
        backgroundColor: '#3D1F12',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        padding: 16,
        marginTop: 16,
    },
    quoteText: {
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
        alignItems: 'center',
    },
    rateButton: {
        backgroundColor: '#F6A530',
        flex: 1,
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
    },
    rateText: {
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: '#1C120D',
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 20,
    },
});
