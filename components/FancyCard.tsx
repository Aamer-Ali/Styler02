import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa
            Mahal is known as the “ palace of winds “.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  card: {
    height: 350,
    borderRadius: 4,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'lightgray',
    elevation: 4,
  },
  cardImage: {
    resizeMode: 'stretch',
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 8,
    flexShrink: 1,
  },
  cardFooter: {
    fontSize: 14,
    marginBottom: 8,
  },
});
