import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentSelector = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.payment}>Seleccione el método de pago</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    payment: {
        fontSize: 16,
        color: '#555',
    },
});

export default PaymentSelector;