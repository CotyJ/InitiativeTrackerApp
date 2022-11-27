import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appStyles from '../appStyles';

const CharacterCard = (props) => {
  const [count, setCount] = useState(0);

  // Tapping text handler
  const TapText = () => {
    console.log('Tapped on Text!');
    setCount((prevCount) => prevCount + 1);
  };
  // const hold = TapText();

  // Expand card handler?
  const PressCheck = () => {
    console.log(`Long press on ${props.charName}`);
  };

  const styles = StyleSheet.create(appStyles);

  return (
    <View style={styles.card}>
      <Text
        onPress={TapText}
        fontSize="32"
        style={styles.hpText}
        onLongPress={PressCheck}
      >
        {`${props.charName}`}
      </Text>

      <Text onPress={TapText} style={styles.heart}>
        ❤ {count}
      </Text>
    </View>
  );
};

export default CharacterCard;
