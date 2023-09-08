import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GradientText from "react-native-gradient-texts";

export const Wellcome1 = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Wellcome2')
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <GradientText
                text={"DCY"}
                fontSize={74}
                fontWeight={600}
                isGradientFill
                gradientColors={['#FF56A9', '#FFAA6C']}


            />
            <Text style={{
                color: '#FFF',
                fontSize: 18,
                fontWeight: 600
            }}
            >Crypto Wallet</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 50,
        paddingRight: 50,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#080A0C'
    },
    text: {
        textTransform: 'uppercase',
    }
})