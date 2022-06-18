import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = () => {
	return (
		<View style={styles.task}>
			<Text style={styles.taskText}>this is a task</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	task: {
		backgroundColor: '#f5f5f5',
		padding: 10,
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#e3e3e3',
	},
	taskText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default Task;
