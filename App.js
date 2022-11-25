import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

import CharacterCard from './components/characterCard.js';

const App = () => {
  const characters = [
    'Kaiper',
    'Alfonse',
    'Gar',
    'Ghoul 1',
    'Ghoul 2',
    'Ghoul 3',
    'Ghoul 4',
    'Ghoul 5',
    'Ghoul 6',
    'Ghoul 7',
    'Ghoul 8',
    'Ghoul 9',
    'Ghoul 10',
    'Ghoul 11',
    'Ghoul 12',
  ];

  var charactersObj = {};

  const onCreateNew = () => {
    console.log('Create New Char Only Works Once!');
    characters.push('New Char Who Dis?');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character}
              charName={character}
              style={styles.card}
            />
          );
        })}
      </ScrollView>

      <View>
        {/* <Button
          title='Add New Char'
          style={styles.buttons}
          fontSize='36'
          color='#FFF596'
          alignItems='left'
          borderRadius='8'/>

          <Button
          title='Reset'
          style={styles.buttons}
          fontSize='36'
          color='#FFF596'
          borderRadius='8'/> */}

        <Pressable style={styles.buttons} color="#5D2725" onPress={onCreateNew}>
          <Text style={styles.text}>ADD NEW</Text>
        </Pressable>
        <Pressable style={styles.buttons} color="#5D2725">
          <Text style={styles.text}>RESET</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'yellow',
    paddingTop: 40, // safeareaview not working
    backgroundColor: '#5D2725',
    alignItems: 'center',
  },
  card: {
    paddingLeft: 20,
    fontSize: '6em',
    fontWeight: 'bold',
    flex: 1,
    borderColor: '#4D3324',
    borderWidth: 3,
    minWidth: '80%',
    height: 50,
    // margin: 5,
    justifyContent: 'center',
    backgroundColor: '#FFF596',
    alignItems: 'center',
    borderRadius: 16,
    color: '#5D2725',
  },
  buttons: {
    marginTop: 5,
    paddingLeft: 20,
    fontSize: 36,
    fontWeight: 'bold',
    flex: 1,
    borderColor: '#4D3324',
    borderWidth: 2,
    minWidth: '80%',
    maxWidth: '80%',
    maxHeight: 60,
    margin: 5,
    backgroundColor: '#FFF596',
    borderRadius: 16,
    color: '#5D2725',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  ended: {
    paddingLeft: 20,
    fontSize: 36,
    fontWeight: 'bold',
    flex: 1,
    borderColor: '#4D3324',
    borderWidth: 2,
    maxHeight: 60,
    margin: 5,
    backgroundColor: '#696969',
    borderRadius: 16,
    color: '#000000',
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
  },
});

export default App;
