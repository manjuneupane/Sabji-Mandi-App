// import { View, Text } from 'react-native'

import { useRouter } from "expo-router";
import React from 'react'
import {Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Formik} from "formik";
import logo from "../../assets/images/SabjiMandi.png";
import validationSchema from '../../utils/authSchema';

const entryImage = require("../../assets/images/entryImage.png");

const Signup = () => {

    const handleSignup = () => {

    }
const router = useRouter();
  return (

   <SafeAreaView className="bg-[#ffffff]">
    
     <ScrollView contentContainerStyle= {{height: "100%"}}>
      <View className="m-2 flex justify-center items-center">
        <Image source={logo} style={{width: 200, height: 250}} />

        <Text className="text-xl font-bold text-center mb-1 mt-7 text-black"> Let’s get you started </Text>
     


    <View className="w-5/6">
         <Formik initialValues={{email:"", password:"", name:""}} validationSchema={validationSchema} onSubmit={handleSignup}>
            {({handleChange, handleBlur,handleSubmit, values, errors, touched,
})=>(     
       <View className="w-full">

         <Text className="text-[#11a551] mt-4 mb-2">Name</Text>
       <TextInput className="h-10 border border-[#11a551] text-white rounded px-2"  onChangeText={handleChange("name")} onBlur={handleBlur("name")} value={values.name}  />
        
        {touched.name && errors.name && (<Text className="text-red-500 text-xs mb-2">{errors.name}</Text>)}
        
       <Text className="text-[#11a551] mt-4 mb-2">Email</Text>
       <TextInput className="h-10 border border-[#11a551] text-white rounded px-2" keyboardType="email-address" onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email}  />
        
        {touched.email && errors.email && (<Text className="text-red-500 text-xs mb-2">{errors.email}</Text>)}

         <Text className="text-[#11a551] mt-4 mb-2">Password</Text>
       <TextInput className="h-10 border border-[#11a551] text-white rounded px-2" secureTextEntry onChangeText={handleChange("password")} onBlur={handleBlur("password")} value={values.password}  />
        
        {touched.password && errors.password && (<Text className="text-red-500 text-xs mb-2">{errors.password}</Text>)}

        <TouchableOpacity onPress={handleSubmit} className="p-2 my-2 mt-10 bg-[#11a551]  border-[#11a551] rounded-lg">
        <Text className="text-lg font-semibold text-center">Sign Up </Text>
      </TouchableOpacity>
       </View>
         )}

         </Formik>

         <View  className="flex justify-center items-center">
             <TouchableOpacity className="flex flex-row justify-center mt-5 p-2 items-center" onPress={()=>router.push("/signin")}>
          <Text className="text-black font-semibold text-center">
            Already a User? {" "}
           </Text>

          <Text className="text-base font-semibold underline text-[#11a551]">Sign In</Text>
        </TouchableOpacity>

          <Text className="text-center text-base font-semibold mb-4 text-white" >
         
         <View  className="border-b-2 border-[#11a551] p-2 mb-1 w-24"/> or {" "} <View className="border-b-2 border-[#11a551] p-2 mb-1 w-24" />


        </Text>

         <TouchableOpacity className="flex flex-row justify-center mb-5 p-2 items-center" onPress={()=>router.push("/home")}>
          <Text className="text-black font-semibold text-center">
            Be a  {" "}
           </Text>

          <Text className="text-base font-semibold underline text-[#11a551]">Guest User</Text>
        </TouchableOpacity>
         </View>
     </View>

     </View>  

      <View className="flex-1 justify-end items-center mb-4"> 
        <Image source={entryImage} className="w-full h-full" resizeMode="contain" />
        </View>





      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} /> 
     </ScrollView>

    </SafeAreaView>
  )
}

export default Signup