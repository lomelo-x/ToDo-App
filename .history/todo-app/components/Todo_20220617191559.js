import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Todo = () => {
    return (
        <View style={styles.todo}>
            <Text style={styles.todoText}>Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e3e3e3'
    },
    todoText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
}

export default Todo;