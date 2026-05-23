import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useCartStore } from "../store/cart";

const Payment = () => {
  const router = useRouter();

  const cart = useCartStore((state) => state.cart);

  const [selectedMethod, setSelectedMethod] = useState("esewa");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const paymentMethods = [
    {
      id: "esewa",
      name: "eSewa",
      color: "#ffffff",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVHcExVxy1PsyFbvxJWyDdbyTFWxDJXwzf////b7dRgwS4AAABdzThUwCXr9OVq4z1i1SlSwypZxTRPxClSvyqo35wmXQ5atCzP5shcyi9SuyxWvyyH4UtLtBj2/PL0+u9WzzNVwjxbwzan3Jzf69hXwjtIrQtIrA5CpQ6A7T5Vwzj///9VwTpUxDNXxjhMvCdOxjxXxDpVzC1Uvjez3ahTwyZRySV1yV2LznnX69Pp9edCtRNMwRbF5r5UxkGi1pJmu05kxUqvI8EYAAAAKnRSTlMA/g406G3G8wE4KQbwXh2JnZ+q1+55KCATj0a5A6ZUS376/V4Fm93vbHyMmJRVAAABlElEQVQokY3S6XKbMBQFYIQBAd5t2max45hsrRaEEFiAASfv/1K5YLcmTibT85NvJK7uHMP4v7gTb3N3t/EmX9jKtxfLIFiux78uaTi4XziYMM4CZ2H/vLBZKKWMJIFEo6k/7OFgNoogsksUWtPz1UN/2lkmIERKoqw//242r0cISNdlWaRvjEkSWvZf9B3OQ3GgRV1QShUo53Pz+L6rscOJyGmxF/uU0hSU8Nubqw69ucU5ozQPOyyEYoTgtdfhwxIhlFOqNW1TC7bFGN8e8QdPkh0cyYsi11orhp1r2x5Pjrg74qsQijD4o/V0Y67Mx48IgxAGCfqIAA+AinXZ9q99WALCQKnoTOjwPNAQnpIkFcyphVJqX1PVSInn3mkJcDQ7tAprqGnOmiY6LcFwfQfton0JWpbtEpomjk/raxePeRy/ld0OSkXiOD4v3h3MMHyo9CFN84q3dt8rAygjEc+qKkNR3Iym/R6Zg9mWcJ5BEEouamKs2oIFUITsc8Fa9n+vn19enr+opvF9qQ3XNdyPX94BxahHXFVxX/kAAAAASUVORK5CYII=",

    image: "../assets/images/esewa-logo.png",
    },
    {
      id: "khalti",
      name: "Khalti",
      color: "#ffffff",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAKlBMVEVHcEzbHybbHybbHybbHybbHybbHybbHybbHybbHybbHybbHybbHybbHyZi28c+AAAADXRSTlMAcwmwUMHRKUKE6l+V+1WdQwAAAJhJREFUKJG9kkkSQyEIRMEJJ+5/3VgqX7+SZdIbLV/ZQCvAH2XcV4KB2auoNNIUbuI8T5WTWF56kbgTZruhtI5Dd46L1cWSP12DoBxzX+teUCrR3NDeDnUzBDE4YynWQZ4QlXCMRGAUKMWV6EZxLbp2qaLEcbEko7+jG72MeNrO8vXQ9MSNtys886EypOP5NdQZjSPt+Bf6AHX0CZkAZS7cAAAAAElFTkSuQmCC",
    image: "../assets/images/khalti-logo.png",},
    {
      id: "cod",
      name: "Cash on Delivery",
      color: "#ffffff",
      icon:
        "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F6F7FB]">

      {/* HEADER */}
      <View className="bg-[#2E7D32] px-4 py-4 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-xl font-bold ml-4">
          Payment Method
        </Text>
      </View>

      <ScrollView className="p-4">

        {/* TOTAL */}
        <View className="bg-white rounded-2xl p-4 mb-5 shadow-sm">
          <Text className="text-gray-500">
            Total Payment
          </Text>

          <Text className="text-3xl font-bold text-[#2E7D32] mt-1">
            Rs {total}
          </Text>
        </View>

        {/* PAYMENT METHODS */}
        <Text className="text-lg font-bold text-gray-800 mb-3">
          Select Payment Method
        </Text>

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            onPress={() => setSelectedMethod(method.id)}
            className={`bg-white p-4 rounded-2xl mb-4 border-2 flex-row items-center justify-between ${
              selectedMethod === method.id
                ? "border-[#2E7D32]"
                : "border-transparent"
            }`}
          >

            <View className="flex-row items-center">

              <View
                style={{ backgroundColor: method.color }}
                className="w-14 h-14 rounded-xl items-center justify-center"
              >
                <Image
                  source={{ uri: method.icon }}
                  className="w-8 h-8"
                  resizeMode="contain"
                />
              </View>

              <View className="ml-4">
                <Text className="text-lg font-bold text-gray-800">
                  {method.name}
                </Text>

                <Text className="text-gray-500 text-sm">
                  Fast & Secure Payment
                </Text>
              </View>

            </View>

            {/* RADIO */}
            <View
              className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                selectedMethod === method.id
                  ? "border-[#2E7D32]"
                  : "border-gray-400"
              }`}
            >
              {selectedMethod === method.id && (
                <View className="w-3 h-3 rounded-full bg-[#2E7D32]" />
              )}
            </View>

          </TouchableOpacity>
        ))}

      </ScrollView>

      {/* PAY BUTTON */}
      <View className="bg-white p-4 border-t border-gray-200">

        <TouchableOpacity
          className="bg-[#2E7D32] py-4 rounded-2xl"
        >
          <Text className="text-white text-center font-bold text-lg">
            Pay Rs {total}
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default Payment;