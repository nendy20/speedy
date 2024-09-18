
import { IcartItem } from '@/types/IcartItem';
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, } from 'react-native';
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

    const total = item.price * item.count

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
                    }}>
                    <Text style={[styles.upTextbutton, { color: selectedTip === tip ? "#FFF" : "#000" }]}>{`$  ${total * tips[index]}.00`}</Text>
                    <Text style={[styles.downTextButton, { color: selectedTip === tip ? "#FFF" : "#8b8e90" }]}>{`${(tip * 100).toFixed(0)}%`}</Text>
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
        justifyContent: 'center',
        gap: 8,
        marginVertical: 10,
    },
    button: {
        borderRadius: 6,
        paddingVertical: 4,
        borderWidth: 1,
        width: 65,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#000",
    },
    upTextbutton: {
        fontWeight: "600"
    },
    downTextButton: {
        fontWeight: "500"
    }
});

export default TipSelector;