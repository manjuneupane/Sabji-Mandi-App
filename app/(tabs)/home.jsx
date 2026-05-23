// import { View, Text, Image, Platform, ScrollView, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import logo from "../../assets/images/dinetimelogo.png";
// import banner from "../../assets/images/banner1.jpg";
// import { BlurView } from 'expo-blur';
// import  {ActivityIndicator} from 'react-native';

// import  {restaurants} from "../../store/restaurants";

// const home = () => {

//   const renderItem = ({item}) => (
//     <TouchableOpacity >
//       <Image 
//       resizeMode="cover"
//       source={{uri: item.image}} className="h-28 w-40 mt-2 mb-1 rounded-lg" />
//       </TouchableOpacity>
//       );
  
//   return (
//     <SafeAreaView style={{backgroundColor: "#2b2b2b"}}> 
//       <View className="flex items-center">
//         <View className="bg-[#5f5f5f] w-11/12  rounded-lg shadow-lg justify-between items-center flex flex-row">

//           <View className="flex flex-row ">
//             <Text className={`text-base h-10 pt-[${Platform.OS === "ios" ? 8 : 6.5}] align-middle text-white`}>Welcome to{" "}</Text>
//             <Image resizeMode='cover' className={"w-20 h-12"} source={logo} />
//           </View>
//         </View>
//         </View>

//         <ScrollView>
//           <ImageBackground resizeMode='cover' className="w-full h-52 my-4 items-center justify-center" source={banner}>


//            <BlurView intensity={Platform.OS === "android" ? 200 : 50} tint='dark' className="w-full h-16 p-4 shadow-lg">
//         <Text className="text-center text-white text-3xl font-bold">Offers Limited</Text>
//       </BlurView>


//           </ImageBackground>
//         </ScrollView>

//         {
//           restaurants.length > 0?(
//           <FlatList data = {restaurants}  
//           renderItem={renderItem}
//           horizontal 
//           contentContainerStyle={{padding: 16}} showsHorizontalScrollIndicator={false} scrollEnabled={true} /> ): (<ActivityIndicator animating color={"#fb9b33"}  />

//           )
//         }
//     </SafeAreaView>
//   )
// }

// export default home










import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";

import logo1 from '../../assets/images/SabjiMandi.png';
import banner from '../../assets/images/banner1.png';

import { products } from '../../store/product';
import { useCartStore } from "../../store/cart";

const Home = () => {

  const router = useRouter();

  // ✅ ALL HOOKS MUST BE HERE
  const addToCart = useCartStore((state) => state.addToCart);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity className="bg-white mr-4 rounded-2xl overflow-hidden shadow-md w-44">

        {/* IMAGE */}
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          className="h-36 w-full"
        />

        <View className="p-3">

          {/* NAME */}
          <Text className="text-base font-bold text-gray-800">
            {item.name}
          </Text>

          {/* PRICE */}
          <Text className="text-green-700 font-semibold mt-1">
            Rs {item.price}
          </Text>

          {/* RATING */}
          <View className="flex-row items-center mt-1">
            <Ionicons name="star" size={14} color="#f59e0b" />
            <Text className="ml-1 text-gray-600 text-sm">
              {item.rating}
            </Text>
          </View>

          {/* ADD TO CART */}
          <TouchableOpacity
            onPress={() => addToCart(item)}
            className="mt-3 bg-[#2E7D32] py-2 rounded-lg"
          >
            <Text className="text-white text-center font-semibold">
              Add to Cart
            </Text>
          </TouchableOpacity>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F6F7FB]">

      {/* HEADER */}
      <View className="px-4 pt-2">
        <View className="bg-[#2E7D32] rounded-2xl px-4 py-3 flex-row items-center justify-between shadow-lg">

          <View>
            <Text className="text-white text-sm">
              Welcome to
            </Text>

            <Text className="text-white text-2xl font-bold">
              Sabji Mandi
            </Text>
          </View>

          {/* RIGHT SIDE */}
          <View className="flex-row items-center gap-5">

            {/* CART ICON */}
            <TouchableOpacity onPress={() => router.push("/(tabs)/cart")}>
              <Ionicons name="cart" size={26} color="white" />
            </TouchableOpacity>

            {/* LOGO */}
            <Image
              resizeMode="contain"
              className="w-12 h-12"
              source={logo1}
            />

          </View>

        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* SEARCH */}
        <View className="px-4 mt-5">
          <TouchableOpacity className="bg-white rounded-xl px-4 py-4 flex-row items-center shadow-sm">
            <Ionicons name="search" size={20} color="#777" />
            <Text className="ml-3 text-gray-500">
              Search vegetables & fruits
            </Text>
          </TouchableOpacity>
        </View>

        {/* BANNER */}
        <View className="px-4 mt-5">
          <ImageBackground
            resizeMode="cover"
            className="w-full h-52 overflow-hidden rounded-3xl justify-end"
            source={banner}
          >
            <BlurView
              intensity={Platform.OS === 'android' ? 80 : 30}
              tint="dark"
              className="px-4 py-5"
            >
              <Text className="text-white text-3xl font-bold">
                Fresh Vegetables
              </Text>

              <Text className="text-white text-base mt-1">
                Up to 40% OFF Today
              </Text>
            </BlurView>
          </ImageBackground>
        </View>

        {/* CATEGORIES */}
        <View className="px-4 mt-6">
          <Text className="text-xl font-bold text-gray-800">
            Categories
          </Text>

          <View className="flex-row justify-between mt-4">

            <TouchableOpacity className="bg-white w-[23%] py-4 rounded-2xl items-center shadow-sm">
              <Text className="text-3xl">🥦</Text>
              <Text className="mt-2 text-sm font-semibold">Veggies</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white w-[23%] py-4 rounded-2xl items-center shadow-sm">
              <Text className="text-3xl">🍎</Text>
              <Text className="mt-2 text-sm font-semibold">Fruits</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white w-[23%] py-4 rounded-2xl items-center shadow-sm">
              <Text className="text-3xl">🥔</Text>
              <Text className="mt-2 text-sm font-semibold">Roots</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white w-[23%] py-4 rounded-2xl items-center shadow-sm">
              <Text className="text-3xl">🌶️</Text>
              <Text className="mt-2 text-sm font-semibold">Spices</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* PRODUCTS */}
        <View className="mt-7">

          <View className="px-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-gray-800">
              Popular Items
            </Text>
          </View>

          {products.length > 0 ? (
            <FlatList
              data={products}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <ActivityIndicator size="large" color="#2E7D32" />
          )}

        </View>

        <View className="h-24" />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;