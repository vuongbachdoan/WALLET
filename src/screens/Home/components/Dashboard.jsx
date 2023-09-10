import { Avatar, Button, Stack, Text } from "native-base";
import React from "react";
import GradientText from "react-native-gradient-texts";
import { StyleSheet, Animated, ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VisaCard } from "../../../components/VisaCard";

export const Dashboard = ({ navigation }) => {

    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <ScrollView
                style={styles.container}
            >
                <Stack style={{ display: 'flex', flexDirection: 'row', columnGap: 7, width: '100%', justifyContent: 'space-between' }}>
                    <Avatar bg="lightBlue.400" source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }} size="md">
                        Avt
                    </Avatar>
                    <Avatar bg="#202832" size="md">
                        <Ionicons name='notifications' size={28} color='grey' />
                        <Avatar.Badge bg="green.500" />
                    </Avatar>
                </Stack>
                <Stack
                    display='flex'
                    flexDirection='column'
                    width='100%'
                    alignItems='center'
                >
                    <GradientText
                        text={"500.00$"}
                        fontSize={50}
                        fontWeight={500}
                        isGradientFill
                        gradientColors={['#FF56A9', '#FFAA6C']}
                    />
                    <Text color='grey' fontWeight='semibold'>12,027,500.00VND</Text>
                </Stack>

                <Stack style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15
                }}>
                    <Text style={{ color: 'grey' }} fontSize='xl' fontWeight='semibold'>Card</Text>
                    <Ionicons name="add-circle" size={35} color='grey' />
                </Stack>
                <Stack style={{ marginTop: 15 }}>
                    <VisaCard />
                </Stack>
            </ScrollView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%',
        height: '100%',
        backgroundColor: '#080A0C',
    },
    text: {
        textTransform: 'uppercase',
        color: '#FFF'
    }
})