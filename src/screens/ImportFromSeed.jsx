import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const ImportFromSeed = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <View
            style={styles.container}
        >
            <ScrollView
                keyboardShouldPersistTaps='handled'
            >
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 12,
                    width: '100%'
                }}>
                    <Input
                        placeholder="Seed Phrase"
                        flex={1}
                        height='64px'
                        fontSize={14}
                        type={showPassword ? 'text' : 'password'}
                        borderColor='#181E25'
                        color='#FFF'
                        borderWidth={1}
                        borderRadius={15}
                        InputRightElement={
                            <Icon
                                as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                                size="xl"
                                mr={2}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                    />
                    <Button
                        size="sm"
                        width='64px'
                        height='64px'
                        borderColor='#181E25'
                        borderWidth={1}
                        borderRadius={15}
                        backgroundColor='#202832'
                        rightIcon={<Icon as={<MaterialIcons name="qr-code-scanner" />} size="xl" />}
                    >
                    </Button>
                </View>
            </ScrollView>
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#080A0C'
    },
    text: {
        textTransform: 'uppercase',
    }
});
