import React,{Component} from 'react';
import { StyleSheet,Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import ImageButton from '../components/imageButton';
import Input from '../components/input'
const {width,height} = Dimensions.get("screen");

export default class Home extends Component{
    render() {        
        return (
          <View>
            <SafeAreaView style={styles.header}>
              <View style={styles.container1}>
                <Text style={styles.headerText}>Find Your Next Trip!</Text>
              </View>
              <View style={styles.container2}>
                <Image source={{ uri: "https://images.unsplash.com/photo-1643646736753-04809d58cbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" }} style={styles.headerImage} />
              </View>
            </SafeAreaView>
            <View style={styles.container3}>
              <Input />
            </View>
            <View style={styles.imageConatiners}>
              <View style={styles.imageView}>
                <Image source={{uri:"https://images.unsplash.com/photo-1594376425830-449d2b7572d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} style={styles.image} />
                <ImageButton title="Luxury" description="Stunning Places" />
              </View>
              <View style={styles.imageView}>
                <Image source={{uri:"https://images.unsplash.com/photo-1573532271406-b13cb961e22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} style={styles.image} />
                <ImageButton title="Family" description="Love Everywhere" />
              </View>
            </View>
            <View style={styles.imageConatiners}>
              <View style={styles.imageView}>
                <Image source={{uri:"https://images.unsplash.com/photo-1577566513769-6fcdbef97b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}} style={styles.image} />
                <ImageButton title="Backpacking" description="Enjoy every moment" />
              </View>
              <View style={styles.imageView}>
                <Image source={{uri:"https://images.unsplash.com/photo-1605338803155-a7e9ffe012d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}} style={styles.image} />
                <ImageButton title="Adventure" description="Make new discoveries" />
              </View>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },

  container1: {
    flex: 0.6,
    paddingTop: 20
  },

  container2: {
    flex: 0.35,
    paddingTop: 20,
    alignItems: "flex-end"
  },

  container3: {    
    alignItems: "center",
  },

  headerText: {
    fontSize: 45,
    fontWeight: "bold",
    paddingLeft: 20
  },

  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "flex-end"
  },

  imageConatiners:{
    flexDirection:"row",
    marginTop:30,
    marginLeft:10,
  },

  imageView:{
    width:width/2.4,
    height:height/3.5,        
    marginHorizontal:12,
    borderRadius:10,    
  },

  image:{
    width: "100%",
    height:"100%"
  }

});
