import { IcartItem } from '@/types/IcartItem';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ selectedTip, item, tips, customTip }: { selectedTip: number, item: IcartItem, tips: number[], customTip: number }) => {
    const shipping: number = 85;
    const serviceFee: number = 10;
    const result = (item.total + shipping + serviceFee);
    const total = customTip >= 1 ? item.total + customTip : item.total + (item.total * selectedTip);

    return (
        <View style={styles.container}>
            <Text>Subtotal: $ {item.total}.00</Text>
            <Text>hola:{customTip}</Text>
            <Text>Tarifa total de envío: $ {shipping}.00</Text>
            <Text>Service Fee: $ {serviceFee}.00</Text>
            <Text>Cantidad a pagar: $ {total}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
});

export default OrderSummary;