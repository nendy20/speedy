import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SpecialInstructions = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Instrucciones Especiales"
                multiline
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
});

export default SpecialInstructions;