import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";



export default function EditTaskScreen({navigation}) {
    return (
        <View style={styles.box}>
                <Text style={styles.titulo}>
                    Edit</Text>
                </View>

    );
}
