import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ImageButton({title,description}){
    return(
        <TouchableOpacity style={styles.imageButton}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    imageButton:{
        width:"100%",
        height:"30%",
        backgroundColor:"rgba(0,0,0,0.5)",
        position:"absolute",
        bottom:0,
        left:0
    },

    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        textAlign:"center"
    },

    description:{
        fontSize:15,   
        marginVertical:3,     
        color:"white",
        textAlign:"center"
    }
})

