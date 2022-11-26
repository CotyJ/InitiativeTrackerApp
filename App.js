import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

import CharacterCard from './components/characterCard.js';
import appStyles from './appStyles.js';
import sortActed from './test.js';

const App = () => {
  // Temporary character storage. Refactor out later
  const characters = [
    'Kaiper',
    'Alfonse',
    'Gar',
    'Ghoul 1',
    'Ghoul 2',
    'Ghoul 3',
    'Ghoul 4',
    'Ghoul 5',
  ];

  const [value, setValue] = useState(0); // integer state

  // Refactor character array into characters objects
  // var charactersObj = {};

  // Sort characters by initiative value

  // If they have taken their turn, move them to below the "End of Turn" separator

  // On tap of card, change their status to !hasActed

  // Forces the app to update with a hook? Not 100% how this works
  function useForceUpdate() {
    console.log('Refreshing');
    characters.push('NEW');
    setValue((value) => value + 0); // update state to force render
  }

  function doSomething() {
    console.log('Doing something!!!');
  }

  // const forceUpdate = useForceUpdate(); // Being invoked immediately ❌ ❌ ❌
  // const doit = doSomething();
  console.log('Starting App! ✅ ✅ ✅');

  return (
    <View style={appStyles.container}>
      <ScrollView>
        {characters.map((character) => {
          // Mapping Cards
          return (
            <CharacterCard
              key={character}
              charName={character}
              style={styles.card}
            />
          );
        })}
      </ScrollView>

      <View style={{ paddingTop: 11 }}>
        <Pressable
          style={styles.buttons}
          color="#5D2725"
          onPress={useForceUpdate}
        >
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
