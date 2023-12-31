import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Task from "./components/Task";
import AddTaskScreen from "./screens/AddTaskScreen";
import EditTaskScreen from "./screens/EditTaskScreen";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardScreen from "./screens/CardScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabsNavigation">
                <Stack.Screen
                    name="TabsNavigation"
                    component={TabsNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Task" component={Task} />
                <Stack.Screen name="EditTaskScreen" component={EditTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tabs.Navigator
            activeColor="black"
            tabBarStyle={{
                backgroundColor: "black",
            }}
            barStyle={{
                backgroundColor: "white",
            }}
        >
            <Tabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tabs.Screen
                name="AddTaskScreen"
                component={AddTaskScreen}
                options={{
                    tabBarLabel: "Add",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26} />
                    ),
                }}
            />
            <Tabs.Screen
                name="CardScreen"
                component={CardScreen}
                options={{
                    tabBarLabel: "Listar ",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="pen" color={color} size={26} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
