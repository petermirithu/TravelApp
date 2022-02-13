import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from '../styles/styles';

export default function Input({ }) {
    return (        
        <View style={styles.inputContainer}>
            <FontAwesome5 name="search" style={styles.searchIcon} size={20} />
            <TextInput placeholderTextColor="#aaa" placeholder="Search" style={styles.input} />
        </View>        
    )
}