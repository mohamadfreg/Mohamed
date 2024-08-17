import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import ScreenNames from '../routes/screenNames'
import AppCoatext from '../../store/appconttext';

const Descrption = (props) => {
   const {Cart,setCart}=useContext(AppCoatext);

    const { name, size, color, price, image } = props.route.params

    const [qty, setqty] = useState(1);
    const [choosenSize , setChoosenSize] = useState(size[0])
    const [choosencolor , setChoosencolor] = useState(color[0])
    

    const mines =()=>{
       if (qty>1){
        setqty(qty - 1)
       } 
    }

    const renderSizes = () => {
        return size.map(sizeItem => (
            <TouchableOpacity onPress={()=> setChoosenSize(sizeItem)} style={[styles.sizeCotainer , choosenSize == sizeItem && {backgroundColor:'#ffff'}]}>
                <Text style={[styles.text , choosenSize == sizeItem && {color:'black'}]}>{sizeItem}</Text>
            </TouchableOpacity>
        ))
    }

    const rendercolor = () => {
        return color.map (colorItem => (
            <TouchableOpacity onPress={()=> setChoosencolor(colorItem)} style={[styles.colorCotainer , choosencolor == colorItem && {backgroundColor:'#ffff'}]}>
                <Text style={[styles.text , choosencolor == colorItem && {color:'black'}]}>{colorItem}</Text>
            </TouchableOpacity>

      ))
    }

    return (
        <View>
            <View style={styles.Imagesview}>
                <Image style={styles.img} source={{uri:image}} />
            </View>
            <View style={styles.quntityView}>
                <Pressable onPress={() => setqty(qty + 1)}>
                    <Text style={styles.txt}>+</Text>
                </Pressable>
                <Text style={styles.txt}>{qty}</Text>
                <Pressable onPress={() => mines()}>
                    <Text style={styles.txt}>-</Text>
                </Pressable>

            </View>
            {/* <View style={styles.infoView}> */}
                <Text style={styles.pname}>{name}</Text>
            {/* </View> */}
            <View style={styles.infoView}>
                <Text style={styles.text}>size : {size}</Text>
                {/* {renderSizes()}  */}
            </View>
            <View style={styles.infoView}>
                <Text style={styles.text}>   color          : </Text>
                <Text style={styles.text}>{color}</Text>
            </View>
            <View style={styles.infoView}>
                <Text style={styles.text}>   price          : </Text>
                <Text style={styles.text}>{price + "$"}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => {
                Cart.push({ 
                    name:name, 
                    size:choosenSize, 
                    color:choosencolor, 
                    price:price, 
                    image:image,
                    qty:qty
                })
                setCart((v)=>[...v])
                props.navigation.goBack()
                // props.navigation.navigate(ScreenNames.cart,{name, image:image,qty, choosenSize ,choosencolor})
                }}>
                <Text style={styles.txt}>Click to buy</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Descrption

const styles = StyleSheet.create({
    Imagesview: {
        width: '100%',
        height: 250,
        alignSelf: 'center',
        marginBottom: 20,
    },
    img: {
        width: '100%',
        height: 250,
        resizeMode:'contain',
    },
    text: {
        fontSize: 30,
        color: 'white',
        
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
        // height: 50,
        backgroundColor: 'black',
        marginVertical: 10,

    },
    btn: {
        width: 200,
        alignItems:'center',
        alignSelf: 'center',
        backgroundColor: 'gray',
        elevation: 5,
        borderRadius: 10,
    },
    button: {
        color: 'green',
        fontSize: 50,
        paddingLeft: 80,

    },
    quntityView: {
        // borderWidth: 1,
        // height: 50,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    txt: {
        fontSize: 20,
        color: 'black',
    },
    pname:{
        marginLeft:-1,
        color:"black",
        fontSize: 35,
        marginLeft:  10 , 
        fontWeight: 'bold',
    } , 
    sizeCotainer:{
        borderWidth:1 , 
        borderColor:'#ffff' , 
        borderRadius: 15 , 
        padding: 5 , 
        marginVertical : 10 ,
     },
     colorCotainer:{
        borderWidth:1 , 
        borderColor:'#ffff' , 
        borderRadius: 15 , 
        padding: 5 , 
        marginVertical : 10 ,
     },
    




})