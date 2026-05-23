// import { useRouter } from "expo-router";
// import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import logo1 from "../assets/images/SabjiMandi.png";

// const entryImage = require("../assets/images/Frame.png");

// export default function Index() {
//   const router = useRouter();
//   return (
//     <SafeAreaView className="bg-[#ffffff]">
    
//      <ScrollView contentContainerStyle= {{height: "100%"}}>
//       <View className="m-2 flex justify-center items-center">
//         <Image source={logo1} style={{width: 300, height: 300}} />
     
//       <View className="w-3/4" > 
//       <TouchableOpacity onPress={()=>router.push("/signup")} className="p-2 my-2 bg-[#11a551]  border-[#11a551] rounded-lg">
//         <Text className="text-lg font-semibold text-center">Sign Up </Text>
//       </TouchableOpacity>

//        <TouchableOpacity onPress={()=>router.push("/home")} className="p-2 my-2 bg-[#ffff] border border-[#11a551] rounded-lg max-w-fit">
//         <Text className="text-lg font-semibold text-center text-[#11a551]">Guest User</Text>
//       </TouchableOpacity>
//       </View>

//       <View>

//         <Text className="text-center text-base font-semibold my-4 text-white" >
         
//          <View  className="border-b-2 border-[#f49b33] p-2 mb-1 w-24"/> or {" "} <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />


//         </Text>

//         <TouchableOpacity className="flex flex-row justify-center items-center" onPress={()=>router.push("/signin")}>
//           <Text className="text-white font-semibold text-center">
//             Already a User? {" "}
//            </Text>

//           <Text className="text-base font-semibold underline text-[#f49b33]">Sign In</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
      
//       <View className="flex-1 justify-end items-center mb-4"> 
//         <Image source={entryImage} className="w-full h-full" resizeMode="contain" />
//         </View>


//       <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} /> 
//      </ScrollView>

//     </SafeAreaView>
//   );
// }




























import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo1 from "../assets/images/SabjiMandi.png";
const entryImage = require("../assets/images/entryImage.png");

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* TOP SECTION */}
        <View className="flex-1 justify-center items-center px-4 mt-10">

          <Image source={logo1} style={{ width: 250, height: 250 }} />

          {/* BUTTONS */}
          <View className="w-3/4 mt-4">

            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-3 my-2 bg-[#11a551] rounded-lg"
            >
              <Text className="text-lg font-semibold text-center text-white">
                Sign Up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="p-3 my-2 bg-white border border-[#11a551] rounded-lg"
            >
              <Text className="text-lg font-semibold text-center text-[#11a551]">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>

          {/* OR SECTION */}
          <View className="flex-row items-center my-6">
            <View className="h-[1px] w-16 bg-[#11a551]" />
            <Text className="mx-2 font-semibold">OR</Text>
            <View className="h-[1px] w-16 bg-[#11a551]" />
          </View>

          {/* SIGN IN */}
          <TouchableOpacity
            className="flex-row"
            onPress={() => router.push("/signin")}
          >
            <Text className="font-semibold">Already a User? </Text>
            <Text className="font-semibold underline text-[#11a551]">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOTTOM IMAGE */}
        <View className="justify-end items-center flex-1 mb-1">
          {/* <Image
            source={entryImage}
            className="w-full h-64"
            resizeMode="contain"
          /> */}


          <Image
  source={entryImage}
  style={{ width: 450, height: 320 }}
  resizeMode="contain"
/>
        </View>

        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      </ScrollView>
    </SafeAreaView>
  );
}