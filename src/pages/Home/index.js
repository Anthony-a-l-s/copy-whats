import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import List from '../../components/List'


export default function Home() {

    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Anthony',
            type: 'personal',
            image: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png'
        },

        {
            id: 2,
            name: 'Anthony',
            type: 'personal',
            image: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png'
        },

        {
            id: 3,
            name: 'Anthony',
            type: 'group',
            image: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png'
        },

        {
            id: 4,
            name: 'Anthony',
            type: 'group',
            image:  'https://sujeitoprogramador.com/instareact/fotoPerfil1.png'

        },

        {
            id: 5,
            name: 'Anthony',
            type: 'personal',
            image: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png'
        },

        {
            id: 6,
            name: 'Anthony',
            type: 'personal',
            image: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png'
        },
    ])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=> item.id}
                data={chats}
                renderItem={({item})=> <List data={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A1C19'
    }
});
