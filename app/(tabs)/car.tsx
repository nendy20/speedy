import CartItem from '@/components/cartItem';
import FooterButtons from '@/components/FooterButtons';
import OrderSummary from '@/components/OrderSummary';
import PaymentSelector from '@/components/PaymentSelector';
import ShippingDetails from '@/components/ShippingDetails';
import SpecialInstructions from '@/components/SpecialInstructions';
import TipSelector from '@/components/TipSelector';
import dataStore from '@/store/dataStore';
import { IcartItem } from '@/types/IcartItem';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';



const CarScreen = () => {
    const [selectedTip, setSelectedTip] = useState(0);
    const { addItem, cartItem, getItems } = dataStore


    const router = useRouter();
    const [customTip, setCustomTip] = useState(0);



    const tips = [0.05, 0.10, 0.15];

    const changeItemCount = (id: string, value: number) => {
        const result = cartItem.map((item: IcartItem) => item.id === id ? { ...item, count: value, total: item.price * value } : item)
        addItem(result)
    }

    const deleteItem = (id: string) => {
        const itemDelete = cartItem.filter((item: IcartItem) => id != item.id)
        addItem(itemDelete)
    }


    return (
        <ScrollView style={styles.container}>
            {cartItem.length >= 1 ?
                <>
                    <Text style={{ fontWeight: "700", marginBottom: 2, marginLeft: 2 }}>Jarez Gran Abasto</Text>
                    {cartItem.map((item: any, index) => <CartItem key={index} item={item} changeItemCount={changeItemCount}
                        deleteItem={deleteItem} />)}
                    <ShippingDetails />
                    <SpecialInstructions />
                    <TipSelector tips={tips} selectedTip={selectedTip} setSelectedTip={setSelectedTip}
                        item={cartItem[0]}
                        setCustomTip={setCustomTip} />
                    <OrderSummary selectedTip={selectedTip} tips={tips} item={cartItem[0]} customTip={customTip} />
                    <PaymentSelector />
                    <FooterButtons />
                </>
                : <View style={{ display: "flex", alignItems: "center", }}>
                    <Text style={{ marginBottom: 6 }}>tu carrito esta vacio</Text>
                    <Button title='ver productos' onPress={() => router.push("/")} />
                </View>
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',

    },
});

export default CarScreen;