import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";

export const GradientButton = ({ text, width, height, colors = ['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C'], color = '#FFF', onPress = () => { }, prefixIcon }) => {

  const handlePress = () => {
    onPress();
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: height ?? 48,
          borderRadius: 48,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          minWidth: width,
          minHeight: height
        }}
      >
        {
          prefixIcon &&
          <>{prefixIcon}</>
        }
        {
          text &&
          <Text style={{ color: color, fontSize: 16, fontWeight: 600 }}>{text}</Text>
        }
      </LinearGradient>
    </TouchableOpacity>
  );
};