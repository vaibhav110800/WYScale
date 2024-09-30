import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import UserListScreen from "./app/screens/UserListScreen";
import UserDetailsScreen from "./app/screens/UserDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// TODO:: check this
// import { SafeAreaProvider } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

export default function App() {
  const customHeader = ({ navigation }) => ({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons
          name="menu"
          size={30}
          color="#fff"
          style={{ marginLeft: 15 }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        }}
        style={{ width: 35, height: 35, borderRadius: 17.5, marginRight: 15 }}
      />
    ),
    headerStyle: { backgroundColor: "#1E1E1E" },
    headerTintColor: "#fff",
  });

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ navigation }) => customHeader({ navigation })}
        >
          {/* Define your screens here */}
          <Drawer.Screen name="User List" component={UserListScreen} />
          <Drawer.Screen name="User Details" component={UserDetailsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
