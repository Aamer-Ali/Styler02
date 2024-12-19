import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Sayyed Aamer',
      status: 'Programmer',
      imageUrl: 'https://avatars.githubusercontent.com/u/111050144?s=48&v=4',
    },
    {
      uid: 2,
      name: 'Shaikh Ayesha',
      status: 'Teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/111050144?s=48&v=4',
    },
    {
      uid: 3,
      name: 'Khan Shoeb',
      status: 'Flutter Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/111050144?s=48&v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.userCard}>
            <View style={styles.userAvatarContainer}>
              {' '}
              <Image
                source={{
                  uri: contact.imageUrl,
                }}
                style={styles.userAvatar}
              />
            </View>
            <View style={styles.userDescriptionContainer}>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  container: {},
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  userAvatar: {height: 50, width: 50, resizeMode: 'contain'},
  userAvatarContainer: {
    margin: 8,
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: 'hidden',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  userDescriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
});
