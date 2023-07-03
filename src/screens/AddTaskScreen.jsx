import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function AddTaskScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataPessoa, setDataPessoa] = useState("");

  function cadastrarTask() {
    const docRef = addDoc(collection(db, "tarefa"), {
      titulo: titulo,
      descricao: descricao,
      dataPessoa: dataPessoa,
      data: new Date(),
    }).then((data) => {
      console.log(data);
      // navigation.navigate("HomeScreen");
    });
  }

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
        <TextInput
          label="Data de Cadastro"
          value={dataPessoa}
          onChangeText={setDataPessoa}
        />

        <Button
          labelStyle={{ fontWeight: "bold", color: "black" }}
          onPress={cadastrarTask}
        >
          Cadastrar
        </Button>

      </View>
    </View>
  );
}
