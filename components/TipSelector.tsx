
import { IcartItem } from '@/types/IcartItem';
import React, { useState } from 'react';
import { View, Button, StyleSheet, Pressable, Text, } from 'react-native';
import ModalView from './modal';

interface ITipSelector {
    selectedTip: number,
    setSelectedTip: (selectedTip: number) => void,
    item: IcartItem,
    tips: number[],
    setCustomTip: (tip: number) => void
}

const TipSelector = ({ selectedTip, setSelectedTip, item, tips, setCustomTip }: ITipSelector) => {
    const [modalview, setModalView] = useState(false)

    const setModal = () => {
        setModalView(!modalview)
    }

    return (
        <View style={styles.tipContainer}>
            {tips.map((tip, index) => (
                <Pressable
                    key={index}
                    style={[styles.button,
                    {
                        borderColor: selectedTip == tip ? "#00a3e0" : "#46bbe7",
                        backgroundColor: selectedTip == tip ? "#00a3e0" : "#FFF"

                    }]}
                    onPress={() => {
                        setCustomTip(0)
                        setSelectedTip(tip)
                    }}
                >
                    <Text>{`$ ${item.total * tips[index]}.00`}</Text>
                    <Text>{`${(tip * 100).toFixed(0)}%`}</Text>
                </Pressable>
            ))}
            <ModalView modalView={modalview} setModal={setModal} selectedTip={selectedTip}
                setSelectedTip={setSelectedTip} setCustomTip={setCustomTip} />
        </View>
    );
};

const styles = StyleSheet.create({
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    button: {
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 12,
        elevation: 2,
        borderWidth: 2,
        borderStyle: "solid",

        color: "#000"
    }
});

export default TipSelector;