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
            uri: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={3} style={styles.cardDescription}>
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
    margin: 16,
    padding: 8,
    height: 340,
    borderRadius: 8,
    backgroundColor: '#E07C24',
  },
  elevatedCard: {
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    marginBottom: 16,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardDescription: {
    color: 'white',
  },
  cardImage: {
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
    flexShrink: 1,
  },
  cardBodyContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cardFooterContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  readMoreLink: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    padding: 8,
  },
});
