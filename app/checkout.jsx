import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartStore } from "../store/cart";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Checkout = () => {

  const router = useRouter();
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* HEADER */}
      <View className="bg-green-700 px-4 py-4">
        <Text className="text-white text-xl font-bold">
          Checkout
        </Text>
      </View>

      <ScrollView className="p-4">

        {/* DELIVERY ADDRESS */}
        <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-gray-800">
              Delivery Address
            </Text>
            <Ionicons name="create-outline" size={20} />
          </View>

          <Text className="text-gray-500 mt-2">
            Kathmandu, Nepal - Default Address
          </Text>
        </View>

        {/* CART ITEMS */}
        <Text className="font-bold text-lg mb-2">
          Order Items
        </Text>

        {cart.map((item, index) => (
          <View
            key={index}
            className="bg-white p-3 rounded-xl mb-3 flex-row items-center"
          >
            <Image
              source={{ uri: item.image }}
              className="w-16 h-16 rounded-lg"
            />

            <View className="flex-1 ml-3">
              <Text className="font-bold text-gray-800">
                {item.name}
              </Text>

              <Text className="text-green-700 font-semibold">
                Rs {item.price}
              </Text>

              <Text className="text-gray-500 text-sm">
                Qty: {item.quantity || 1}
              </Text>
            </View>
          </View>
        ))}

        {/* PRICE SUMMARY */}
        <View className="bg-white p-4 rounded-xl mt-2">
          <Text className="font-bold text-gray-800 mb-3">
            Price Details
          </Text>

          <View className="flex-row justify-between mb-2">
            <Text>Subtotal</Text>
            <Text>Rs {total}</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text>Delivery Fee</Text>
            <Text className="text-green-600">Free</Text>
          </View>

          <View className="border-t my-2" />

          <View className="flex-row justify-between">
            <Text className="font-bold">Total</Text>
            <Text className="font-bold text-green-700">
              Rs {total}
            </Text>
          </View>
        </View>

        {/* PAYMENT INFO */}
        <View className="bg-white p-4 rounded-xl mt-4">
          <Text className="font-bold text-gray-800 mb-2">
            Payment Method
          </Text>

          <Text className="text-gray-500">
            Cash on Delivery (COD)
          </Text>
        </View>

        <View className="h-24" />
      </ScrollView>

      {/* BOTTOM PLACE ORDER */}
      {/* <View className="bg-white p-4 border-t">
        <TouchableOpacity className="bg-green-700 py-4 rounded-xl">
          <Text className="text-white text-center font-bold text-lg">
            Place Order (Rs {total})
          </Text>
        </TouchableOpacity>


        
      </View> */}


<View className="bg-white p-4 border-t">

    <TouchableOpacity
      onPress={() => router.push("/payment")}
      className="bg-green-700 py-4 rounded-xl"
    >
      <Text className="text-white text-center font-bold text-lg">
        Continue to Payment
      </Text>
    </TouchableOpacity>
    </View>


    </SafeAreaView>
  );
};

export default Checkout;