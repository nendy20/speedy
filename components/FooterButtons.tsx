import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const FooterButtons = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => { }} style={[styles.button, { borderWidth: 1, borderColor: "#000" }]}>
                <Text style={[styles.text]}>PROGRAMAR ORDEN</Text>
            </Pressable>
            <Pressable onPress={() => { }} style={[styles.button, { backgroundColor: "#00a3e0" }]}>
                <Text style={[styles.text, { color: "#FFF" }]}>REALIZAR PEDIDO</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15,
    },
    text: {
        fontWeight: "700"
    }
});

export default FooterButtons;