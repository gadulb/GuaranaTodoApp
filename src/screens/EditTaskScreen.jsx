import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

export default function EditTaskScreen({ docId, navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataPessoa, setDataPessoa] = useState("");

  useEffect(() => {
    // Carrega os dados da tarefa a ser editada
    async function fetchTaskData() {
      const taskDocRef = doc(db, "tarefa", docId);
      const taskDocSnapshot = await taskDocRef.get();

      if (taskDocSnapshot.exists()) {
        const taskData = taskDocSnapshot.data();
        setTitulo(taskData.titulo);
        setDescricao(taskData.descricao);
        setDataPessoa(taskData.dataPessoa);
      }
    }

    fetchTaskData();
  }, []);

  function atualizarTask() {
    const taskDocRef = doc(db, "tarefa", docId);

    updateDoc(taskDocRef, {
      titulo: titulo,
      descricao: descricao,
      dataPessoa: dataPessoa,
    }).then(() => {
      console.log("Tarefa atualizada com sucesso!");
      navigation.navigate("HomeScreen");
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Editar Tarefa</Text>
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
          onPress={atualizarTask}
        >
          Atualizar
        </Button>
        <Button
          labelStyle={{ fontWeight: "bold", color: "black" }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          Voltar
        </Button>
      </View>
    </View>
  );
}
