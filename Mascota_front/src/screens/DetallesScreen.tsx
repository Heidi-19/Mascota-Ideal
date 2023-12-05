/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import { UserProfile } from './UserProfile';

interface DetallesProps {
    navigation: StackNavigationProp<any, 'Detalles'>;
}

export const DetallesScreen: React.FC<DetallesProps> = ({ }) => {
    const [value, setValue] = React.useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
            <View style={styles.actions}>
                <SafeAreaView>
                    <View style={styles.tabs}>
                        {[
                            { name: 'Informacion' },
                        ].map(({ name }, index) => {
                            const isActive = index === value;

                            return (
                                <TouchableOpacity
                                    key={name}
                                    onPress={() => {
                                        setValue(index);
                                    }}
                                    style={styles.tabsItemWrapper}>
                                    <View style={styles.tabsItem}>
                                        <Text
                                            style={[
                                                styles.tabsItemText,
                                                isActive && { color: '#F26463' },
                                            ]}>
                                            {name}
                                        </Text>
                                    </View>

                                    {isActive && <View style={styles.tabsItemLine} />}
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </SafeAreaView>
            </View>

            <ScrollView>
                <View style={styles.photos}>
                    {/* Deslizador horizontal */}

                    <Image source={require('../assets/Loki2.jpg')} style={styles.photos} />

                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Loki</Text>
                    <View style={styles.headerRow}>
                        <View style={styles.headerLocation}>
                            <FeatherIcon color="#7B7C7E" name="pin-outline" size={14} />

                            <Text style={styles.headerLocationText}>
                                Agencia La Lobera, Tlaxiaco
                            </Text>
                        </View>

                        <Text style={styles.headerPrice}>
                            <FeatherIcon name='heart-outline' size={35} />
                        </Text>
                    </View>

                    <View style={styles.headerRow}>
                        <View style={styles.headerStars}>
                            <Text style={styles.headerStarsText}>20 reviews</Text>
                        </View>
                        <Text style={styles.headerDistance}>4.6 miles</Text>
                    </View>
                </View>


                <View style={styles.about}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                        <View style={styles.container}>
                            <View style={styles.profile}>
                                <Image
                                    alt=""
                                    source={{
                                        uri: 'https://github.com/Heidi-19/Mascota-Ideal/blob/main/Mascota_front/src/assets/perfil.jpg?raw=true',
                                    }}
                                    style={styles.profileAvatar}
                                />

                                <View >
                                    <Text style={styles.profileName}>Heidi Lucy Sanjuan Bautista</Text>

                                    <Text style={styles.profileHandle}>Propietaria</Text>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>

                    <Text style={styles.aboutDescription}>
                        ¿Estas buscando un nuevo amigo?
                        {'\n'}
                        Perro melancolico que puede aocmpañarte en los dias en los que odias al mundo
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.overlay}>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}
                        style={{ flex: 1, paddingHorizontal: 8 }}>
                        <View style={styles.btnSecondary}>
                            <Text style={styles.btnSecondaryText}>ADOPTAME</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 48,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    actions: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    actionWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: -8,
        marginBottom: 12,
    },
    photos: {
        borderRadius: 8,
        flex: 1,
        margin: 10,
        marginBottom: 16,
        alignItems: 'center',
        width: 250,
        height: 350,
        paddingLeft:150,
    },
    photosImg: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: '100%',
        height: 240,
        borderRadius: 12,
    },
    photosPagination: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: '#242329',
        borderRadius: 31,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    photosPaginationText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: '#ffffff',
    },
    header: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 32,
        color: '#242329',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    headerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLocationText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#7b7c7e',
        marginLeft: 4,
    },
    headerPrice: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 32,
        textAlign: 'right',
        color: '#f26463',
    },
    headerStars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerStarsText: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    headerDistance: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    picker: {
        marginTop: 6,
        marginHorizontal: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        height: 48,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderStyle: 'solid',
        borderRadius: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pickerDates: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerDatesText: {
        marginLeft: 8,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        color: '#242329',
    },
    pickerFilter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerFilterWrapper: {
        borderLeftWidth: 1,
        borderColor: '#e5e5e5',
        paddingLeft: 12,
    },
    pickerFilterItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    pickerFilterItemText: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        color: '#242329',
        marginLeft: 4,
    },
    stats: {
        marginVertical: 16,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statsItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsItemText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 18,
        color: '#242329',
        marginLeft: 7,
    },
    about: {
        marginHorizontal: 20,
    },
    aboutTitle: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 32,
        color: '#242329',
        marginBottom: 4,
    },
    aboutDescription: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    footer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 36,
        borderWidth: 1,
        backgroundColor: '#242329',
        borderColor: '#242329',
        height: 52,
    },
    btnSecondary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#F26463',
        borderColor: '#F26463',
        height: 52,
    },
    btnSecondaryText: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '700',
        color: '#fff',
    },
    btnText: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '700',
        color: '#fff',
    },
    action: {
        width: 36,
        height: 36,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderStyle: 'solid',
        borderRadius: 12,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        flexDirection: 'row',
        paddingHorizontal: 0,
    },
    tabsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 4,
    },
    tabsItemLine: {
        width: 20,
        height: 3,
        backgroundColor: '#f26463',
        borderRadius: 24,
    },
    tabsItemWrapper: {
        marginRight: 28,
    },
    tabsItemText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    horizontalSlider: {
        marginBottom: 0,
    },
    horizontalButton: {
        marginRight: 8,
    },
    buttonImage: {
        width: 400,
        height: 200,
        borderRadius: 8,
    },
    container: {
        paddingVertical: 5,
        paddingHorizontal: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    profile: {
        padding: 0,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
        marginRight: 12,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#292929',
    },
    profileHandle: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: '400',
        color: '#858585',
    },
    profileAction: {
        marginTop: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        borderRadius: 12,
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
    },
});