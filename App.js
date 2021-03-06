import AllContacts from "./screens/AllContacts";
import DetailsScreen from "./screens/Details";
import AddContact from "./screens/AddContact";
import EditContact from "./screens/EditContact";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IconBtn } from "./shared/RoiButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#941a1d" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={AllContacts}
            options={() => ({
              headerTitle: "ROI Contacts",
              headerTitleStyle: { fontSize: 25 },
            })}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ headerTitle: "Details" }}
          />
          <Stack.Screen name="New Contact" component={AddContact} />
          <Stack.Screen name="Edit Contact" component={EditContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  AddContactBtn: {
    marginRight: 2,
  },
});
