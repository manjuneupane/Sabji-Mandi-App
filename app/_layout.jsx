// import { Stack } from "expo-router";

// import "../global.css";
// import { Text } from "react-native";

// export default function RootLayout() {
//   return <Stack screenOptions={{headerShown: false}}>
    

//     <Stack.Screen name="index"  /> 
//     <Stack.Screen name="(tabs)"  /> 
//      </Stack>;
// }



import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="home" />


      
    </Stack>
  );
}