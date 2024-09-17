import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const FooterButtons = () => {
    return (
        <View style={styles.container}>
            <Button title="Programar Orden" onPress={() => { }} />
            <Button title="Realizar Pedido" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
});

export default FooterButtons;