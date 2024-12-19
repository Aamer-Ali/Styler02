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
          <Text style={styles.cardTitle}>Hawa Mahel</Text>
          <Text style={styles.cardLabel}>Pink City Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa
            Mahal is known as the “ palace of winds “. Maharaja Sawai Pratap
            Singh built it palace in 1799. Hawa Mahal is considered to be unique
            as it has many small windows and balconies that seem like a
            honeycomb.
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
    padding: 16,
  },
  cardElevated: {},
  cardImage: {
    height: 200,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
