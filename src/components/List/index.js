
import React from 'react';

import {

    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export default function List(props) {

    function renderImage(type) {
        return  type === 'personal' ? require('../../images/user.png') :
        require('../../images/group.png')
    }

    return (
        <View>
            <TouchableOpacity style={styles.containerList}>
                <Image source={props.data.image ? { uri: props.data.image }:
                renderImage(props.data.type)
            } style={styles.image} />
                <Text style={styles.nameContact}>{props.data.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerList: {
        flexDirection: 'row',
        margin: 20
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    nameContact: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    }
});
