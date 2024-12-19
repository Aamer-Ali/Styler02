import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            {' '}
            WHat's new Java script 21 - ES12{' '}
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={3}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa
            Mahal is known as the “ palace of winds “.
          </Text>
        </View>
        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.readMoreLink}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  card: {
    padding: 16,
  },
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {height: 200, resizeMode: 'stretch'},
  cardBodyContainer: {},
  cardFooterContainer: {},
  readMoreLink: {},
});
