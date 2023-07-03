import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function CardScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('/assets/icone.png')} style={{width: 300, height: 200,}}/>
            <View style={styles.box}>
               
            </View>
        </View>
    );
}