import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function AddTaskScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");

  const docRef = addDoc(collection(db, "tarefa"), {
    titulo: titulo,
    descricao: descricao,
    data: new Date(),
  });

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text>Cadastro</Text>

      <TextInput label="Título" value={titulo} onChangeText={setTitulo} />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput label="Data de Cadastro" value={data} onChangeText={setData} />

      <Button
        labelStyle={{ fontWeight: "bold", color: "black" }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Entrar em conta existente
      </Button>
      </View>
    </View>
  );
}
