import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Group from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {

    return (
        <View style={styles.header}>
            <View style={styles.containerLogo}>
                <Text style={styles.textLogo}>WatsApp</Text>
                <View style={styles.containerIcons}>

                    <TouchableOpacity style={styles.iconRight}>
                        <Icon name='camera' size={25} color='#fff' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconLeft} >
                        <Icon name='search' size={25} color='#fff' />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.iconLeft, {marginRight: 10}]}>
                        <Icon name='more-vertical' size={25} color='#fff' />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.containerPages}>

                <TouchableOpacity>
                    <Group name='account-group' size={25} color='#C2C2C2' style={[styles.space, {marginLeft: 10}]} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.space}>
                    <Text style={styles.textPages}>Conversas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.space}>
                    <Text style={styles.textPages}>Atualizações</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textPages}>Chamadas</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: '13%',
        backgroundColor: '#102926'
    },

    containerLogo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },

    containerPages: {
        flexDirection: 'row'
    },

    textLogo: {
        fontSize: 25,
        color: '#fff',
        margin: 10,
        marginLeft: 10,
    },

    containerIcons: {
        flexDirection: 'row',
        marginTop: 15
    },

    iconRight: {
        marginRight: 15
    },

    iconLeft: {
        marginLeft: 15
    },

    textPages: {
        fontSize: 18,
        color: '#C2C2C2'
    },

    space: {
        marginRight: 25,
    }
})