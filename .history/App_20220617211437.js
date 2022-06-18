import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.todoContainer}>
				<Text style={styles.sectionTitle}>Today's Tasks</Text>
				<View style={styles.itemsContainer}>
					<Task text={'Task 1'} />
					<Task text={'Task 2'}/>
					<Task text={'Task 3'}/>
				</View>
			</View>
			<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : "height" }
			style={styles.writeTaskContainer}>
				<TextInput style={styles.writeTaskInput} placeholder="Write a task..." />
				<TouchableOpacity>
					<View style={styles.addTaskButton}>
						<Text style={styles.addTaskButtonText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
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
	writeTaskContainer
writeTaskInput: {
	
addTaskButton: {
		backgroundColor: '#E8EAED',
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#e3e3e3',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
addTaskButtonText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
