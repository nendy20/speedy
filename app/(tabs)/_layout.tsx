import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import AppTab from '@/components/Apptab';
import { useCarItemsStore } from '@/store/carItemsStorage';

const Layout = () => {
  const router = useRouter();
  const { items, clearCar } = useCarItemsStore()

  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      headerTitleAlign: "center",
      tabBarStyle: {
        height: 80,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      },
      headerStyle: {
        backgroundColor: "#efefef"
      },
    }} >
      <Tabs.Screen
        name='index'
        options={{
          title: "Inicio",
          tabBarIcon: ({ focused }) => (
            <AppTab title='Inicio' focused={focused}>

              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25} />
            </AppTab>)
        }} />

      <Tabs.Screen
        name='car'
        options={{
          title: "Carro",
          headerRight: () => (
            <Pressable onPress={() => clearCar()} style={{ marginRight: 26 }}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>vaciar carrito</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")}>
              <MaterialIcons name="arrow-back-ios" style={{ paddingLeft: 12 }} size={24} color="black" />
            </Pressable>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25} />
              {1 > 0 && (
                <View
                  style={styles.Notification}>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: '700' }}>
                    {items}
                  </Text>
                </View>
              )}
              <Text style={{
                color: focused ? "#019FDE" : "#84898B",
                fontSize: 12,
                fontWeight: '600',
              }}>Carro</Text>
            </View>
          )
        }} />

      <Tabs.Screen
        name='orders'
        options={{
          title: "Pedidos",
          tabBarIcon: ({ focused }) => (
            <AppTab title='Pedidos' focused={focused}>
              <Ionicons
                name={focused ? "bag" : "bag-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25} />
            </AppTab>
          )
        }} />

      <Tabs.Screen
        name='counts'
        options={{
          title: "Cuentas",
          tabBarIcon: ({ focused }) => (
            <AppTab focused={focused} title='Cuentas'>
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25} />
            </AppTab>
          )
        }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  Notification: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Layout