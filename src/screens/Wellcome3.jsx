import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GradientText from "react-native-gradient-texts";
import { Button } from 'native-base';
import DecorImg from '../assets/shield.png';

export const Wellcome3 = ({ navigation }) => {
    const [timeoutId, setTimeoutId] = React.useState(null);
    React.useEffect(() => {
        const id = setTimeout(() => {
            navigation.navigate('Wellcome4')
        }, 3000)
        setTimeoutId(id);
    }, [])

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
                fontWeight: 600
            }}
            >Safe</Text>
            <GradientText
                text={"Security"}
                fontSize={65}
                fontWeight={600}
                isGradientFill
                gradientColors={['#FF56A9', '#FFAA6C']}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 24
                }}
            >
                <Button
                    borderRadius='48px'
                    height='48px'
                    width='100%'
                    backgroundColor='#202832'
                    onPress={() => {
                        clearTimeout(timeoutId);
                        navigation.navigate('Wellcome4');
                    }}
                >
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 600 }}>Next</Text>
                </Button>
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