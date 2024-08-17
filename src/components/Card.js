import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        {/* Assuming props.image is a URL */}
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.dateText}>B.D: 2009.7.8</Text>
      </View>
      <Text style={styles.descriptionText}>My first UI</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    margin: 12,
    padding: 16,
    width: '90%',
    alignSelf: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  infoContainer: {
    marginBottom: 12,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  descriptionText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});
