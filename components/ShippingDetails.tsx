import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShippingDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Gastos de Envío:</Text>
            <Text style={styles.amount}>Despachador $ 85.00</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: '#8f9294',
        fontWeight: "500"
    },
    amount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#060606'
    },
});

export default ShippingDetails;