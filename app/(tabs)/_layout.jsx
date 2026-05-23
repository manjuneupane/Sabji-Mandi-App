// import { View, Text } from 'react-native'
// import React from 'react'
// import { Tabs } from 'expo-router'
// import { Colors } from '../../assets/Colors'
// import  Ionicons  from '@expo/vector-icons/Ionicons';

// const TabLayout = () => {
//   return (
//     <Tabs screenOptions={{
//         headerShown: false,
//          tabBarActiveTintColor: Colors.PRIMARY, tabBarInactiveTintColor: Colors.dark.text,
//         tabBarStyle: {
//             backgroundColor: Colors.SECONDARY,
//             paddingBottom: 14, 
//             height: 75,
//         },
//         tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: "bold",
//         },
//     }}>
//       <Tabs.Screen name="home"
//        options={{
//         title: "Home",
//          tabBarIcon: ({color}) => (
//         <Ionicons name="home" size={24} color={color} />
//         )
//         }} />
//          <Tabs.Screen name="history" options={{title: "History", tabBarIcon: ({color}) => (<Ionicons name="time" size={24} color={color} />)}} />
//       <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({color}) => (<Ionicons name="person" size={24} color={color} />)}} />
//     </Tabs> 
//   )
// }

// export default TabLayout




import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../assets/Colors';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: '#8E8E93',

        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 75,
          paddingBottom: 10,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* CATEGORIES */}
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* CART */}
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* ORDERS */}
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'receipt' : 'receipt-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;