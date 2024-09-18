
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface IModal {
    modalView: boolean,
    setModal: () => void,
    selectedTip: number,
    setSelectedTip: (selected: number) => void,
    setCustomTip: (tip: number) => void
}

const ModalView = ({ modalView, setModal, selectedTip, setSelectedTip, setCustomTip }: IModal) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        setCustomTip(Number(text))
        setModal()
    };

    return (
        <View style={[styles.centeredView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalView}
                onRequestClose={() => {
                    setModal()
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setText(text)}
                            value={text}
                            placeholder="propina"
                        />
                        <Pressable
                            style={[styles.button]}
                            onPress={handleSubmit}>
                            <Text style={styles.textStyle} >guardar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button,
                {
                    backgroundColor: selectedTip === 0 ? "#00a3e0" : "#FFF",
                    borderColor: selectedTip === 0 ? "#00a3e0" : "#46bbe7",
                }]}
                onPress={() => {

                    setModal()
                    setSelectedTip(0)
                }
                }
            >
                <Text style={[styles.textStyle, { color: selectedTip === 0 ? "#FFF" : "#000" }]}>Personalizar Cantidad</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        // backgroundColor: "red",
    },
    modalView: {
        position: "absolute",
        top: 300,
        left: "25%",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: "50%",
        alignItems: 'center',
        elevation: 5,
    },
    button: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#84C9EB",
        borderRadius: 6,
        paddingVertical: 4,
        height: 48,
        paddingHorizontal: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        width: "80%",
        marginBottom: 10,
        borderBottomColor: '#84C9EB',
        borderBottomWidth: 1
    },
    textStyle: {
        color: '#000',
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center',

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalView