import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appStyles from '../appStyles';

const CharacterCard = ({ charName }) => {
  const [count, setCount] = useState(0);

  console.log(charName);
  // Tapping text handler
  const TapText = () => {
    console.log('Tapped on Text!', charName);
    setCount((prevCount) => prevCount + 1);
  };
  // const hold = TapText();

  // Expand card handler?
  const PressCheck = () => {
    console.log(`Long press on ${charName}`);
  };

  const styles = StyleSheet.create(appStyles);

  return charName !== 'END OF TURN' ? (
    <View style={styles.card}>
      <Text
        onPress={TapText}
        fontSize="32"
        style={styles.hpText}
        onLongPress={PressCheck}
      >
        {charName}
      </Text>

      <Text onPress={TapText} style={styles.heart}>
        ❤ {count}
      </Text>
    </View>
  ) : (
    <View style={styles.endCard}>
      <Text
        style={{ color: 'white', fontWeight: 'bold', fontSize: 36, margin: 0 }}
      >
        {charName}
      </Text>
    </View>
  );
};

export default CharacterCard;
