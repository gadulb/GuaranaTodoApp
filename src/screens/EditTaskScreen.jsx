import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

export default function EditTaskScreen({ route, navigation }) {
  const { docId } = route.params;
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataPessoa, setDataPessoa] = useState("");

  useEffect(() => {
    // Carrega os dados da tarefa a ser editada
    async function fetchTaskData() {
      try {
        const taskDocRef = doc(db, "tarefa", docId);
        const taskDocSnapshot = await getDoc(taskDocRef);

        if (taskDocSnapshot.exists()) {
          const taskData = taskDocSnapshot.data();
          setTitulo(taskData.titulo);
          setDescricao(taskData.descricao);
          setDataPessoa(taskData.dataPessoa);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados da tarefa:", error);
      }
    }

    fetchTaskData();
  }, []);

  async function atualizarTask() {
    try {
      const taskDocRef = doc(db, "tarefa", docId);

      await updateDoc(taskDocRef, {
        titulo: titulo,
        descricao: descricao,
        dataPessoa: dataPessoa,
      });

      console.log("Tarefa atualizada com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
    }
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
          onPress={() => navigation.navigate("CardScreen")}
        >
          Voltar
        </Button>
      </View>
    </View>
  );
}
