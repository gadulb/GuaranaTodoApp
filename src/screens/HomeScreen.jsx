import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Home Screen</Text>
            </View>
        </View>
    );
}