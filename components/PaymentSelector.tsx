import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';

const PaymentSelector = () => {
    return (
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="creditcard" size={24} color="black" />
                <Text style={styles.payment}>Seleccione el método de pago</Text>
            </View>
            <Octicons name="chevron-right" size={20} color="#000" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#efefef",
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 12,
        marginHorizontal: 24,
    },
    payment: {
        fontSize: 16,
        color: '#000',
        fontWeight: "700",
        marginLeft: 6
    },
});

export default PaymentSelector;