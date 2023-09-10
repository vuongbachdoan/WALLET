import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "./components/Dashboard";
import { Ionicons } from "@expo/vector-icons";
import { Button, Stack } from "native-base";
import { GradientButton } from "../../components/GradientButton";

const Tab = createBottomTabNavigator();

export const Home = ({ navigation }) => {

    return (
        <Tab.Navigator
            sceneContainerStyle={{ height: 60, backgroundColor: '#080A0C' }}
            screenOptions={({ route }) => ({
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                swipeEnabled: true,
                tabBarStyle: {
                    backgroundColor: '#202832',
                    borderTopWidth: 0,
                    borderTopColor: 'transparent',
                    height: 70,
                    borderRadius: 70,
                    margin: 5
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    size = 28

                    if (route.name === 'Dashboard') {
                        iconName = 'wallet-outline'
                        return <Ionicons name={iconName} size={size} color={color} />
                    } else if (route.name === 'Transaction') {
                        iconName = 'scan-outline'
                        return <Stack style={{borderWidth: 4, borderColor: '#080A0C', borderRadius: '50%', top: -10}}><GradientButton width={60} height={60} prefixIcon={<Ionicons name={iconName} size={35} color='#000' style={{ marginLeft: 2 }} />}></GradientButton></Stack>
                    } else if (route.name === 'Setting') {
                        iconName = 'cog-outline'
                        return <Ionicons name={iconName} size={size} color={color} />
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF56A9',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel: 'Wallet', tabBarLabelStyle: { fontWeight: 'bold', bottom: 5 } }} />
            <Tab.Screen name="Transaction" component={Dashboard} options={{ tabBarLabel: '' }} />
            <Tab.Screen name="Setting" component={Dashboard} options={{ tabBarLabel: 'Settings', tabBarLabelStyle: { fontWeight: 'bold', bottom: 5  } }} />
        </Tab.Navigator>
    );
};