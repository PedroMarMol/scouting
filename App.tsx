import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true); // Hide the top status bar
    StatusBar.setTranslucent(true); // Make the app's content go behind the status bar

    return () => {
      StatusBar.setHidden(false); // Show the top status bar when the component unmounts
      StatusBar.setTranslucent(false); // Reset the translucent mode
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: (windowWidth - 150) / 2,
    left: (windowHeight - 150) / 2,
    width: 150,
    height: 150,
    transform: [{rotate: '90deg'}],
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 75,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
