import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import AppCoatext from '../../store/appconttext';

const Cart = (props) => {
  const { Cart, setCart } = useContext(AppCoatext);

  const removeItem = (index) => {
    Cart.splice(index, 1)
    setCart([...Cart])
  }

  const onbuy=()=>{
    
  }

  return (
    <View style={styles.screen}>
      {
        Cart.map((items, index) =>
          <View style={styles.dox}>
            <Text> {items.name} </Text>
            <Text> {items.size} </Text>
            <Text> {items.color} </Text>
            <Image style={styles.img} source={{ uri: items.image }} />
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.olp}>
                X
              </Text>
            </TouchableOpacity>
          </View>
        )
      }
      <TouchableOpacity style={styles.btn} onPress={() => {
        // Cart.push({
        //     name:name,
        //     size:choosenSize, 
        //     color:choosencolor, 
        //     price:price, 
        //     image:image,
        //     qty:qty,
        // })
        // setCart((v)=>[...v])
        // props.navigation.goBack()
        //  props.navigation.navigate(ScreenNames.cart,{name, image,qty, choosenSize ,choosencolor})
      }}>

        <Text style={styles.olp2} onPress={()=>{}}> buy</Text>

      </TouchableOpacity>

    </View>

  )
}

export default Cart

const styles = StyleSheet.create({
  dox: {
    flexDirection: 'row',
    width: "100%",
    height: 70,
    margin: 5,
    // alignItems:'center'
    justifyContent: 'space-around'
  },
  screen: {
    flex: 1,
    backgroundColor: '#4545',
    margin: 15,
    width: "90%",
    alignItems: 'center',
    //justifyContent:'center',
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 40,
    //elevation:5,

  },
  txt: {
    fontSize: 25,
    color: 'green',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  olp: {
    flex: 1,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'center',
    margin: 15,
  },
  olp2: {
    flex: 1,
    // height: 70,
    //flexDirection: 'row',
    //justifyContent:'space-around',
    // justifyContent:'center',
    fontSize: 30,
    //alignItems: 'center',
    // marginTop: 200,
    //borderRadius:20,
    //borderWidth:1,
    fontSize: 40,
    //backgroundColor:"green",
    //width:60,
    //height:60,

  }



})