import { IcartItem } from '@/types/IcartItem';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IOrder {
    selectedTip: number,
    item: IcartItem,
    tips: number[],
    customTip: number
}

const OrderSummary = ({ selectedTip, item, customTip }: IOrder) => {
    const shipping: number = 85;
    const serviceFee: number = 10;
    const total = item.price * item.count;
    const result = (total + shipping + serviceFee);
    const totalfinal = customTip >= 1 ? total + customTip : total + (total * selectedTip);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.rowGraytext}>Subtotal:</Text>
                <Text style={styles.rowGraytext}>$ {total}.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowGraytext}>Tarifa total de envío:</Text>
                <Text style={styles.rowGraytext}>$ {shipping}.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowGraytext}>Service Fee:</Text>
                <Text style={styles.rowGraytext}>$ {serviceFee}.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowBlacktext}>Cantidad a pagar:</Text>
                <Text style={styles.rowBlacktext}>$ {totalfinal}.00</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        display: "flex",
        gap: 16
    },
    row: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        width: "100%"
    },
    rowGraytext: {
        fontWeight: "600",
        fontSize: 16,
        color: "#939699"
    },
    rowBlacktext: {
        fontWeight: "600",
        fontSize: 18,
        color: "#000"
    },
});

export default OrderSummary;