import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const SpecialInstructions = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.container}>
            {
                !isFocused &&
                <Text style={styles.placeholder}>Instrucciones Especiales</Text>
            }
            <TextInput
                onFocus={() => setIsFocused(true)}
                placeholderTextColor={'#8e9193'}
                style={[styles.input]}
                multiline
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#efefef',
        height: 80,
        borderRadius: 10
    },
    input: {
        borderRadius: 8,
        padding: 10,
    },
    placeholder: {
        marginTop: 10,
        marginLeft: 10,
        color: "#8e9193",
        fontWeight: "500",
        fontSize: 16
    },

});

export default SpecialInstructions;