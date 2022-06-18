import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({text}) => {
	return (
		<View style={styles.task}>
			<View style={styles.taskLeft}>
				<TouchableOpacity style={styles.square}></TouchableOpacity>
				<Text style={styles.taskText}>{text}</Text>
			</View>
			<View style={styles.taskRight}></View>
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
		flexDirection: 'row',
		
	},
	taskText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	taskLeft:{
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	taskRight:{},
	square:{
		width: 24,
		height: 24,
		backgroundColor: '#e3e3e3',
		borderRadius: 5,
		marginRight: 10,

	},
});

export default Task;
