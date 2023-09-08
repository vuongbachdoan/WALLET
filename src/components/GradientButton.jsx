import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const GradientButton = () => {
    return (
        <LinearGradient
        colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}
      >
        <TouchableOpacity>
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 600 }}>Create a New Wallet</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        borderRadius: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})