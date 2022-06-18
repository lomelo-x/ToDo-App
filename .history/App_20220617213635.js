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
	writeTaskContainer: {
		position: 'absolute',
		bottom: 5,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderRadius: 10,
		marginTop: 20,
	},
writeTaskInput: {
		borderWidth: 1,
		borderColor: '#e3e3e3',
		borderRadius: 10,
		padding: 10,
		marginBottom: 20,
		width: '80%',
		height: 60,
	},
addTaskButton: {
		backgroundColor: '#E8EAED',
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#fff',
		marginBottom: 20,
		width: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
addTaskButtonText: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
