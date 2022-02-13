import { Dimensions, StyleSheet } from 'react-native';
const {width,height} = Dimensions.get("screen");

export const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:"#fff",
        width: width/1.1,
        padding:8,
        margin:10,
        borderRadius:20,
        shadowColor:"#000",
        shadowOffset:{
            width:1.5,
            height:1.5
        },
        shadowOpacity:0.5,
        shadowRadius:1.3,
        elevation: 3,
    },

    input:{
        color:"#000",
        marginLeft:40,
        padding:10,        
    },

    searchIcon:{
        position:"absolute",
        left:15,
        top:15,
        color:"#aaa"
    },

    imageConatiners:{
        flexDirection:"row",
        marginTop:30
    }

})