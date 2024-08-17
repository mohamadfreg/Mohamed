import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Product = ({ name, size, color, price, image, id }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('descrption', { name, size, color, price, image, id }); // Navigate to the product details page
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Size: {size}</Text>
          <Text style={styles.detailText}>Color: {color}</Text>
        </View>
        <Text style={styles.priceText}>${price.toFixed(2)}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>View Details</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 20,
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
