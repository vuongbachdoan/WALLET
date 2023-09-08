import { Button, ScrollView } from "react-native";

export const Home = ({ navigation }) => {
    return (
        <ScrollView
            style={{
                paddingTop: 50,
                paddingLeft: 25,
                paddingRight: 25,
                paddingBottom: 25,
            }}
        >
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </ScrollView>
    );
};