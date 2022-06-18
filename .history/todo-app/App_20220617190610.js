import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays Todos */}
      <View style={styles.todoContainer}>
        <Text style={style.sectionTitle}>T
          Today's Todos 
        </Text>
        <View style={styles.itemsContainer}>
        {/* Todos go here */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {

  },
  sectionTitle:{
    
  },
  itemsContainer:{},
});
