import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { Button } from 'native-base';
import DecorImg from '../../../assets/images/illus.png';
import { GradientButton } from "../../../components/GradientButton";

export const Wellcome5 = ({ navigation }) => {
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
            <View style={styles.container}>
                <Image
                    width={295}
                    height={295}
                    source={DecorImg}
                />
                <Text style={{
                    color: '#FFF',
                    fontSize: 40,
                    fontWeight: 600,
                }}
                >Wallet Setup</Text>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 12,
                        width: '100%'
                    }}
                >
                    <Button
                        borderRadius='48px'
                        height='48px'
                        width='100%'
                        backgroundColor='#202832'
                        onPress={() => navigation.navigate('Import From Seed')}
                    >
                        <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 600 }}>Import Using Seed Phrase</Text>
                    </Button>
                    <GradientButton text='Create a New Wallet' />
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#080A0C',
    },
    text: {
        textTransform: 'uppercase',
    }
})