import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const App = () => {
  const thing = {
    property1: 69,
    hp: 30,
  };

  const [count, setCount] = useState(0);

  const TapText = () => {
    console.log("Tapped on Text!");
    setCount(prevCount => prevCount + 1)
  }


  return (
      <View style={styles.container}>


        <ScrollView>
          <Text onPress={TapText} style={styles.card}>Count: {count}</Text>
          <Text onPress={TapText} style={styles.card}>Count: {count}</Text>
          <Text style={styles.card}>Alfonse</Text>
          <Text style={styles.card}>Gar</Text>
          <Text style={styles.card}>Asstin</Text>
          <Text style={styles.card}>Ghoul 1</Text>
          <Text style={styles.ended}>END OF TURN</Text>
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

          <Text style={styles.buttons} color='#5D2725'>ADD NEW</Text>
          <Text style={styles.buttons} color='#5D2725'>RESET</Text>
        </View>

        <StatusBar style='auto' />

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
  },
  buttons: {
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
    color: "#000000",
  }
});

export default App;
