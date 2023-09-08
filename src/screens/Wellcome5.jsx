import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from 'native-base';
import DecorImg from '../assets/wallet.png';
import { GradientButton } from "../components/GradientButton";

export const Wellcome5 = ({ navigation }) => {
    // const [timeoutId, setTimeoutId] = React.useState(null);
    // React.useEffect(() => {
    //     const id = setTimeout(() => {
    //         navigation.navigate('Wellcome3')
    //     }, 3000)
    //     setTimeoutId(id);
    // }, [])

    return (
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
                <GradientButton/>
            </View>
        </View>
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