import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const NavigationLI = () => {
    return (
        <Tabs.Screen
            name='index'
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            color={focused ? "#019FDE" : "#000"}
                            size={25}
                        />
                        <Text style={{
                            color: focused ? "#019FDE" : "#84898B",
                            fontSize: 12,

                        }}>Inicio</Text>
                    </View>
                )
            }}
        />
    )
}

export default NavigationLI