import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  } from 'react-native-web';

const Task = ({text}) => {
	return (
		<View style={styles.task}>
			<View style={styles.taskLeft}>
				<TouchableOpacity
			</View>
			<Text style={styles.taskText}>{text}</Text>
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
