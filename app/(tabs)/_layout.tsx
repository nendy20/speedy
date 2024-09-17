import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';


const Layout = () => {
  const [cartItems, setCartItems] = useState(3);
  const router = useRouter();


  return (
    <Tabs screenOptions={{

      tabBarShowLabel: false,
      headerTitleAlign: "center",
      tabBarStyle: {
        position: "absolute",
        paddingTop: 40,
        paddingBottom: 40,

        left: 0,
        right: 0,
        height: 40,
        elevation: 0,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
      headerStyle: {
        backgroundColor: "#F4F6FB"
      },
    }}>


      <Tabs.Screen
        name='index'
        options={{
          title: "Inicio",
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

      <Tabs.Screen
        name='car'
        options={{
          title: "Carrito",
          headerRight: () => (
            <Pressable style={{ marginRight: 12 }} onPress={() => setCartItems(0)}>
              <Text style={{ fontWeight: "600", fontSize: 12 }}>vaciar carrito</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")
            }>

              <MaterialIcons name="arrow-back-ios" style={{ paddingLeft: 12 }} size={24} color="black" />
            </Pressable>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25}
              />


              {cartItems > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    right: -10,
                    top: -5,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                    {cartItems}
                  </Text>
                </View>
              )}



              <Text style={{
                color: focused ? "#019FDE" : "#84898B",
                fontSize: 12,

              }}>Carro</Text>
            </View>
          ),


        }}
      />





      <Tabs.Screen
        name='orders'
        options={{
          title: "Pedidos",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>

              <Ionicons
                name={focused ? "bag" : "bag-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25}
              />
              <Text style={{
                color: focused ? "#019FDE" : "#84898B",
                fontSize: 12,

              }}>Pedidos</Text>
            </View>
          )
        }}
      />

      <Tabs.Screen
        name='counts'
        options={{
          title: "Cuentas",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                color={focused ? "#019FDE" : "#000"}
                size={25}
              />
              <Text style={{
                color: focused ? "#019FDE" : "#84898B",
                fontSize: 12,

              }}>Cuentas</Text>
            </View>
          )
        }}
      />


    </Tabs>
  )
}

export default Layout