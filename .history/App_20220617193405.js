import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';

export default function App() {
	return (
		<View style={styles.container}>
			{/* Todays Todos */}
			<View style={styles.todoContainer}>
				<Text style={styles.sectionTitle}>Today's Tasks</Text>
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
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	itemsContainer: {
		marginTop: 20,
	},
});
