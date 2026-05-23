import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCartStore } from "../../store/cart";
import { useRouter } from "expo-router";
const Cart = () => {
    const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const renderItem = ({ item }) => (
    <View className="bg-white mx-4 my-2 p-3 rounded-2xl shadow-sm flex-row items-center">

      {/* IMAGE */}
      <Image
        source={{ uri: item.image }}
        className="w-20 h-20 rounded-xl"
      />

      {/* DETAILS */}
      <View className="flex-1 ml-3">

        <Text className="font-bold text-gray-800">
          {item.name}
        </Text>

        <Text className="text-green-600 font-semibold mt-1">
          Rs {item.price}
        </Text>

        {/* QTY CONTROLS */}
        <View className="flex-row items-center mt-2">

          <TouchableOpacity
            onPress={() => decreaseQty(item.id)}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            <Text>-</Text>
          </TouchableOpacity>

          <Text className="mx-3 font-bold">{item.qty}</Text>

          <TouchableOpacity
            onPress={() => increaseQty(item.id)}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            <Text>+</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* REMOVE */}
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Ionicons name="trash" size={22} color="red" />
      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F6F7FB]">

      {/* HEADER */}
      <View className="p-4 bg-[#2E7D32]">
        <Text className="text-white text-xl font-bold">
          My Cart
        </Text>
      </View>

      {/* CART LIST */}
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500">Your cart is empty 🛒</Text>
        </View>
      )}

      {/* TOTAL BAR (DARAZ STYLE) */}
      {cart.length > 0 && (
        <View className="bg-white p-4 border-t border-gray-200">

          <Text className="text-lg font-bold">
            Total: Rs {total}
          </Text>

         <TouchableOpacity
  onPress={() => router.push("/checkout")}
  className="bg-[#2E7D32] mt-3 p-3 rounded-xl"
>
  <Text className="text-white text-center font-bold">
    Proceed to Checkout
  </Text>
</TouchableOpacity>

        </View>
      )}

    </SafeAreaView>
  );
};

export default Cart;