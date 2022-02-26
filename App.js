import { StyleSheet, View } from 'react-native';
import Nav from './src/navigaton/Nav';

export default function App() {
  return (
    <View style={styles.container}>
     <Nav />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20
  },
});

