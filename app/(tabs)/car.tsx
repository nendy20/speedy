import CartItem from '@/components/cartItem';
import FooterButtons from '@/components/FooterButtons';
import OrderSummary from '@/components/OrderSummary';
import PaymentSelector from '@/components/PaymentSelector';
import ShippingDetails from '@/components/ShippingDetails';
import SpecialInstructions from '@/components/SpecialInstructions';
import TipSelector from '@/components/TipSelector';
import { useCarItemsStore } from '@/store/carItemsStorage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';

const CarScreen = () => {
    const [selectedTip, setSelectedTip] = useState(0.05);
    const router = useRouter();
    const [customTip, setCustomTip] = useState(0);
    const tips = [0.05, 0.10, 0.15];
    const { items, Products } = useCarItemsStore()

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#00a3e0" />
            {items >= 1 ?
                <>
                    <Text style={{ fontWeight: "500", marginBottom: 8, marginLeft: 2, fontSize: 18 }}>Jarez Gran Abasto</Text>
                    {Products.map((item: any, index) => <CartItem key={index} item={item} />)}

                    <ShippingDetails />
                    <SpecialInstructions />
                    <Text style={{
                        marginTop: 16,
                        fontSize: 16,
                        color: '#8f9294',
                        fontWeight: "500"
                    }}>Ayuda al driver con una propina</Text>
                    <TipSelector tips={tips} selectedTip={selectedTip} setSelectedTip={setSelectedTip}
                        item={Products[0]} setCustomTip={setCustomTip} />
                    <OrderSummary selectedTip={selectedTip} tips={tips} item={Products[0]} customTip={customTip} />
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
        backgroundColor: '#f2f5f8',

    },
});

export default CarScreen;