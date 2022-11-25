import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CharacterCard = (props) => {
  const [count, setCount] = useState(0);

  const TapText = () => {
    console.log('Tapped on Text!');
    setCount((prevCount) => prevCount + 1);
  };

  const styles = StyleSheet.create({
    card: {
      paddingLeft: 20,
      fontSize: 36,
      fontWeight: 'bold',
      flex: 1,
      borderColor: '#4D3324',
      borderWidth: 3,
      minWidth: '80%',
      height: 50,
      // maxHeight: 50,
      margin: 5,
      justifyContent: 'center',
      backgroundColor: '#FFF596',
      alignItems: 'center',
      borderRadius: 16,
      color: '#5D2725',
      flexDirection: 'row',
    },
    hpText: {
      // color: 'red',
      fontSize: 36,
      flexDirection: 'row',
      flex: 3,
    },
    heart: {
      fontSize: 36,
      flexDirection: 'row',
      flex: 1,
    },
  });

  return (
    <View style={styles.card}>
      <Text onPress={TapText} fontSize="32" style={styles.hpText}>
        {`${props.charName} \t\t\t\t`}
      </Text>

      <Text onPress={TapText} style={styles.heart}>
        🖤 {count}
      </Text>
    </View>
  );
};

export default CharacterCard;
