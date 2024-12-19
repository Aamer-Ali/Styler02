import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TAP</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more .....</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowColor: 'red',
    shadowOpacity: 0.1,
    shadowRadius: 11,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
