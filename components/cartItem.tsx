import { IcartItem } from '@/types/IcartItem';
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

interface cartItemI {
    item: IcartItem,
    changeItemCount: (id: string, value: number) => void,
    deleteItem: (id: string) => void

}

const CartItem = ({ item, changeItemCount, deleteItem }: cartItemI) => {

    const less = () => {
        item.count > 1 && changeItemCount(item.id, item.count - 1)
    }

    const more = () => {
        changeItemCount(item.id, item.count + 1)
    }

    return (
        <View style={styles.cartItem}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{item.details}</Text>
                <Text style={styles.description}>{`${item.count} X $${item.price}.00`} = ${item.price * item.count}.00</Text>
                <View style={styles.quantityContainer}>
                    <Button title="-" onPress={less} />
                    <Text style={styles.quantity}>{item.count}</Text>
                    <Button title="+" onPress={more} />
                </View>
            </View>
            <Button title="🗑" onPress={() => deleteItem(item.id)} />
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: '#777',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 16,
    },
});

export default CartItem;