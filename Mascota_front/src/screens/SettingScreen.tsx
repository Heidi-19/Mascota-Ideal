/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { StackNavigationProp } from '@react-navigation/stack';
import { UserProfile } from './UserProfile';


interface SettingsProps {
    navigation: StackNavigationProp<any, 'SettingsScreen'>;
  }

/*
* Secciones de la pantalla de settings
*/
const SECTIONS = [
    {
        header: 'Preferencias',
        items: [
            { id: 'Language', icon: 'globe-outline', label: 'Lenguaje', type: 'select' },
            { id: 'darkMode', icon: 'moon-outline', label: 'Modo Oscuro', type: 'toogle' },
            { id: 'wifi', icon: 'wifi-outline', label: 'Usar Wi-Fi', type: 'toogle' },
        ],
    },
    {
        header: 'Contenido',
        items: [
            { id: 'add', icon: "add-circle-outline", label: 'Agregar Mascota', type: 'link' },
            { id: 'search', icon: 'search-outline', label: 'Buscar Mascota', type: 'link' },
        ],
    },
    {
        header: 'Ayuda',
        items: [
            { id: 'bug', icon: 'flag-outline', label: 'Reportar Bug', type: 'link' },
            { id: 'contact', icon: 'mail-outline', label: 'Contactanos', type: 'link' },
            { id: 'delete', icon: 'trash-outline', label: 'Eliminar cuenta', type: 'link'},
        ],   
    },
];

export const SettingsScreen: React.FC<SettingsProps> = ({ navigation }) => {
    const [form, setForm] = useState({
        language: 'Español',
        darkMode: true,
        wifi: false,
    });

    return (
        <SafeAreaView style={{ backgroundColor: '#F6F6FE' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Ajustes</Text>
                    <Text style={styles.subtitle}> Actualiza tus preferencias</Text>
                </View>

                <UserProfile/>


                {SECTIONS.map(({ header, items }) => (
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{header}</Text>
                        </View>


                        <View style={styles.sectionBody}>
                            {items.map(({ label, id, type, icon }, index) => (
                                <View
                                    style={[
                                        styles.rowWrapper,
                                        index === 0 && { borderTopWidth: 0 },
                                    ]}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            //handleOnPress
                                        }}>
                                        <View style={styles.row}>
                                            <Icon
                                                name={icon}
                                                color="#616161"
                                                size={22}
                                                style={{ marginRight: 12 }}
                                            />

                                            <Text style={styles.rowLabel}> {label}</Text>

                                            <View style={styles.rowSpacer} />


                                            {type === 'toogle' && (//activar o desactivar botones de modo oscuro y wifi
                                                <Switch
                                                    value={form[id]}
                                                    onValueChange={(value) => setForm({ ...form, [id]: value })}
                                                />
                                            )}

                                            {['select', 'link'].includes(type) && (
                                                <Icon
                                                    name='chevron-forward-outline'
                                                    color="#ababab"
                                                    size={22}
                                                />
                                            )}

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

/*
*Estilos que se utilizaran
*/
const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    header: {
        //color: 'black',
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        //color: 'black',
        fontSize: 42,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#7A6ABA',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    sectionBody: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff',
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#7A6ABA',
    },
    rowSpacer: {
        flex: 1,
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4,
    },
    profileAvatar: {
        width: 160,
        height: 160,
        borderRadius: 9999,
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#090909',
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: '#848484',
    },
    profileAction: {
        marginTop: 12,
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
    profile: {
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
});
