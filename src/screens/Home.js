import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../components/Product';
import { Images } from '../images/images';
import { useNavigation } from '@react-navigation/native';
import AppCoatext from '../../store/appconttext';
import { findprudacts } from '../Api/fetchApi';

const Home = () => {
  const navigation = useNavigation();
  const { Cart } = useContext(AppCoatext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onPressCart = () => {
    navigation.navigate("cart");
  };

  const onPressUserPage = () => {
    navigation.navigate("Accunt");
  };

  const renderCards = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts.map((prod) => (
      <Product
        key={prod.name}
        name={prod.name}
        size={prod.size}
        color={prod.color}
        price={prod.price}
        image={prod?.img || null}
      />
    ));
  };

  useEffect(() => {
    findprudacts().then((res) => {
      setProducts(res.prudacts);
    });
  }, []);

  return (
    <ImageBackground style={styles.container} source={Images.madred()}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.cartButton} onPress={onPressCart}>
          <Image style={styles.cartImage} source={Images.CART()} />
          <Text style={styles.cartCount}>{Cart.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton} onPress={onPressUserPage}>
          <Text style={styles.userButtonText}>user</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#888"
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
      </View>

      <ScrollView contentContainerStyle={styles.productList}>
        {renderCards()}
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted for user button placement
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  cartImage: {
    width: 24,
    height: 24,
  },
  cartCount: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  userButton: {
    backgroundColor: '#007BFF', // Modern color for buttons
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  searchContainer: {
    width: '90%',
    marginVertical: 20,
    alignSelf: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
