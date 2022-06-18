import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';

export default function App() {
	return (
		<View style={styles.container}>
			{/* Todays Todos */}
			<View style={styles.todoContainer}>
				<Text style={styles.sectionTitle}>Today's Todos</Text>
				<View style={styles.itemsContainer}>
					<Todo />
					<Todo />
					<Todo />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
	},
	todoContainer: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		
	},
	itemsContainer: {
		marginTop: 20,
	},
});
