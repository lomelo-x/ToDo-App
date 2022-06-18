import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ text, completeTask }) => {
	return (
		<View style={styles.taskContainer}>
			<View style={styles.taskLeft}>
				<TouchableOpacity style={styles.square}></TouchableOpacity>
				<Text style={styles.taskText}>{text}</Text>
			</View>
			<TouchableOpacity style={styles.taskRight} onPress={() => }></TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	taskContainer: {
		backgroundColor: '#f5f5f5',
		padding: 10,
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#e3e3e3',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	taskText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	taskLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		maxWidth: '80%',
	},
	taskRight: {
		width: 20,
		height: 20,
		borderRadius: 50,
		borderColor: '#e3e3e3',
		borderWidth: 1,
		marginRight: 10,
	},
	square: {
		width: 24,
		height: 24,
		backgroundColor: '#e3e3e3',
		borderRadius: 5,
		marginRight: 15,
	},
});

export default Task;
