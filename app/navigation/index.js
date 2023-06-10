import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Users from "../screens/users";
import UserDetails from "../screens/userdetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/login";
import AboutUs from "../screens/aboutus";
import ContactUs from "../screens/contactus";
import Gallery from "../screens/gallery";
import color from "../constants/color";
import AddorEditUser from "../screens/addUser";
import { Alert, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import icons from "../constants/icons";
import { StackActions } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const User = () => {
    return (
        <Stack.Navigator initialRouteName='user' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='user' component={Users} />
            <Stack.Screen name='modifyUser' component={AddorEditUser} />
            <Stack.Screen name='userDetails' component={UserDetails} />
        </Stack.Navigator>
    )
}
const Navigation = () => {
    return (
        <Drawer.Navigator initialRouteName='login' screenOptions={({ navigation }) => ({
            headerTitle: '', headerStyle: { backgroundColor: color.GREEN }, headerRight: (props) => (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={() =>
                        Alert.alert("Logout alert", "Do you really want to Logout...", [
                            {
                                text: "NO",
                                onPress: () => console.warn("NO Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "YES",
                                onPress: async () => {
                                    await AsyncStorage.clear();
                                    navigation.navigate('login')
                                }

                            }
                        ])
                    }
                >
                    <Image source={icons.logout} style={{ tintColor: color.WHITE, height: 30, width: 30 }} />
                </TouchableOpacity>
            )
        })}>
            <Drawer.Screen name='login' component={Login} options={{ headerShown: false, drawerLabel: () => null, title: null }} />
            <Drawer.Screen options={{ drawerLabel: 'About Us' }} name='aboutUs' component={AboutUs} />
            <Drawer.Screen options={{ drawerLabel: 'Contact Us' }} name='contactUs' component={ContactUs} />
            <Drawer.Screen options={{ drawerLabel: 'Users' }} name='users' component={User} />
            <Drawer.Screen options={{ drawerLabel: 'Gallery' }} name='gallery' component={Gallery} />
        </Drawer.Navigator>
    )
}

export default Navigation