import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

import CharacterCard from './components/characterCard.js';
import appStyles from './appStyles.js';

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

  // Refactor character array into characters objects
  var charactersObj = {};

  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    console.log('Create New Char Only Works Once!');
    characters.push('1234567890123');
    return () => setValue((value) => value + 0); // update state to force render
  }

  const forceUpdate = useForceUpdate();

  return (
    <View style={appStyles.container}>
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

        <Pressable style={styles.buttons} color="#5D2725" onPress={forceUpdate}>
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

const styles = StyleSheet.create(appStyles);

export default App;
