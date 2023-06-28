import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function Task({ task, navigation }) {
    //const { id, title, description } = task;
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("EditTaskScreen", { task })}
        >
            <View style={styles.taskContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}