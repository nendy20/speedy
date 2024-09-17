
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
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalView}
                onRequestClose={() => {
                    //   Alert.alert('Modal has been closed.');
                    setModal()
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
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
                style={[styles.button, { backgroundColor: selectedTip === 0 ? "#00a3e0" : "#FFF", borderColor: selectedTip === 0 ? "#00a3e0" : "#46bbe7" }]}
                onPress={() => {

                    setModal()
                    setSelectedTip(0)
                }
                }
            >
                <Text style={styles.textStyle}>Personalizar Cantidad</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        /*  flex: 1, */
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    },
    modalView: {
        margin: 250,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#84C9EB",
        color: "#000"
    },

    textStyle: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalView