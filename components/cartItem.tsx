import { IcartItem } from '@/types/IcartItem';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useCarItemsStore } from '@/store/carItemsStorage';

interface cartItemI {
    item: IcartItem,
}

const CartItem = ({ item }: cartItemI) => {
    const { addProductCount, deleteProduct, lessProductCount } = useCarItemsStore()

    const imgUrl = 'https://s1.elespanol.com/2019/07/03/ciencia/nutricion/alimentacion-nutricion_410970417_127186274_1706x960.jpg'

    return (
        <View style={styles.cartItem}>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{item.name},</Text>
                <Text style={styles.detailsInfo}>{item.details}</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.description}>{`${item.count} X $${item.price}.00`} = </Text>
                    <Text style={styles.detailsInfo}>$ {item.price * item.count}.00</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <Pressable onPress={() => lessProductCount(item.id)}><Entypo name="minus" size={20} color="#00a3e0" /></Pressable>
                    <Text style={styles.quantity}>{item.count}</Text>
                    <Pressable onPress={() => addProductCount(item.id)}><Entypo name="plus" size={20} color="#00a3e0" /></Pressable>
                </View>
            </View>
            <Pressable style={styles.deleteButton} onPress={() => deleteProduct(item.id)} >
                <Ionicons name="trash-outline" size={24} color="#e65252" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6,
        marginBottom: 15,
        backgroundColor: "#efefef",
        paddingVertical: 15
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    moreless: {

    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: "#8b8e90"
    },
    detailsInfo: {
        fontWeight: '600',
        fontSize: 16,
        color: "#000"
    },
    description: {
        color: '#5b5f62',
        fontWeight: '500',
        fontSize: 16,

    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 5,
        width: 105,
        borderRadius: 5,
        borderColor: '#89d2ed',
        borderWidth: 1,
        paddingVertical: 3,
        paddingHorizontal: 6,
        backgroundColor: "#d3ebf4"
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '600'
    },
    deleteButton: {
        position: "absolute",
        bottom: 20,
        right: 80,
    }
});

export default CartItem;