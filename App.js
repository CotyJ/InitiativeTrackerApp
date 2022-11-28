import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  SectionList,
} from 'react-native';

import CharacterCard from './components/characterCard.js';
import appStyles from './appStyles.js';
import sortActed from './test.js';

const App = () => {
  // Temporary character storage. Refactor out later
  // const characters = [
  //   'Kaiper',
  //   'Alfonse',
  //   'Gar',
  //   'Ghoul 1',
  //   'Ghoul 2',
  //   'Ghoul 3',
  //   'Ghoul 4',
  //   'Ghoul 5',
  // ];

  const [value, setValue] = useState(0); // integer state
  const [modalVisible, setModalVisible] = useState(false); // modal state

  // Refactor character array into characters objects
  var charactersObj = [
    { title: 'acted', data: ['Gar', 21, 'Kaiper', 19] },
    { title: 'END OF TURN', data: ['END OF TURN'] },
    {
      title: 'notActed',
      data: ['Alphonse', 'Asstin', 16, 'Skeleton 1', 12, 'Skeleton 2', 6],
    },
  ];

  // Sort characters by initiative value using sortActed

  // If they have taken their turn, move them to below the "End of Turn" separator

  // On tap of card, change their status to !hasActed

  // Forces the app to update with a hook? Not 100% how this works   ❌ FIX ME ❌
  function useForceUpdate() {
    console.log('Refreshing');
    characters.push('NEW');
    return () => setValue((value) => value + 1);
  }
  // const update = useForceUpdate();

  function doSomething() {
    console.log('Doing something!!!');
  }

  console.log('\n\nStarting App! ✅ ✅ ✅');

  return (
    <View style={appStyles.container}>
      <SectionList
        sections={charactersObj}
        keyExtractor={(item) => item}
        renderItem={(data) => <CharacterCard charName={data.item} />}
        // renderSectionHeader={({ section }) => (
        //   <CharacterCard charName={section.title} />
        // )}
      />

      <View style={{ paddingTop: 11 }}>
        <Pressable
          style={styles.buttons}
          color="#5D2725"
          // onPress={() => useForceUpdate}
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
