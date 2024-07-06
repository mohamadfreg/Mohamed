import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../routes/screenNames'
import { Images } from '../images/images'
import AppCoatext from '../../store/appconttext'

const Product = (props) => {
    const navigation = useNavigation()
     
    const onClick = () => {
        navigation.navigate(ScreenNames.descrption, {...props})
    }

    return (
        <Pressable style={styles.card} onPress={onClick}>
            <ImageBackground source={Images.realMadread2()} style={styles.bgImg}>
            <View style={styles.desc}>
               <Text style={styles.text}>{"Name:  " + props.name}</Text>
               <Text style={styles.text}>{"size: "  + props.size}</Text>
               <Text style={styles.text}>{ "color: " + props.color}</Text>
               <Text style={styles.text}>{"price:" + props.price}</Text>
            </View>
            <View style={styles.Imagesview}>
                <Image style={styles.img}  source={props.image}/>
            </View>
            </ImageBackground>
        </Pressable>
    )
}        

export default Product

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 250,
        backgroundColor: '#000',
        marginTop: 40,
        borderRadius: 40,
        elevation:5,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:10
    },
    desc: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 1,
    },
    Imagesview: {
        width: '50%',
        height: '100%',
        borderWidth:1,
        // backgroundColor:'#fff'
    },
    text:{
        fontSize:25,
        color:'green'

    },
    img: {
        width: 100,
        height:100,
        alignSelf: 'center',
         margin:70, 
        resizeMode:'contain', 
        //  backgroundColor:'red'
        backgroundColor:'rgba(255, 255, 255, 0.2)' 
    },
    bgImg:{
        height:"98%",
        width:'98%',
        flexDirection:'row',
        borderRadius:20,
        alignSelf:'center'
    }
        
    })