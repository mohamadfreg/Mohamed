import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity,ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import { Products } from '../res/data'
import Product from '../components/Product'
import { Images } from '../images/images'
import { useNavigation } from '@react-navigation/native';
import AppCoatext from '../../store/appconttext'


const Home = () => {
  const navigation = useNavigation();
  const {Cart,setCart}=useContext(AppCoatext);
  const onpress = () => {
    const { name, image, qty }=Products[0]
    navigation.navigate("cart",{name,image:image(),qty:5})
  }
  const renderCards = () => {
    const Cards = Products.map((prod) => {
      return <Product
        key={prod.name}
        name={prod.name}
        size={prod.size}
        color={prod.color}
        price={prod.price}
        image={prod?.image?.()||null}

      />
    })
    return Cards;
  }
  return (
    <ImageBackground style={styles.container} source={Images.madred()}>

      <View style={styles.cartView}>
        <TouchableOpacity onPress={onpress}>
          <Image style={styles.img} source={Images.CART()} />
          <Text>{Cart.length}</Text>

        </TouchableOpacity>

      </View> 
      <ScrollView>
        {renderCards()}
      </ScrollView>

    </ImageBackground>
  )

}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  cartView: {
    alignItems: 'flex-end',
    width: "90%",
   
  },
  img: {
    width: 80,
    height: 80, 
    
  }

})




