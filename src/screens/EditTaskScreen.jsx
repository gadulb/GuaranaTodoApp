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
        <Text variant="headlineLarge" style={{textAlign: 'center', marginBottom: 20,}}>Editar Tarefa</Text>
        <Text style={styles.infoT}>Título</Text>
        <TextInput 
          value={titulo} 
          mode="outlined"
          onChangeText={setTitulo}
          placeholder="Titulo" />
        <Text style={styles.infoT}>Descrição</Text>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          mode="outlined"
          placeholder="Descrição"
        />
        <Text style={styles.infoT}>Data</Text>
        <TextInput
          placeholder="Data de Cadastro"
          value={dataPessoa}
          mode="outlined"
          onChangeText={setDataPessoa}
        />

        <Button
          labelStyle={{ fontWeight: "bold", color: "white" }}
          onPress={atualizarTask}
          style={{
            backgroundColor: 'green',
            borderBottomColor: 'black',
            boxShadow: 'black 5px 5px 0 0px',
            borderRadius: 10,
            marginVertical: 40,
          }}
        >
          Atualizar
        </Button>
        <Button
          labelStyle={{ fontWeight: "bold", color: "black" }}
          onPress={() => navigation.navigate("CardScreen")}
          style={{
            marginTop: 50,
            backgroundColor: 'white',
            borderBottomColor: 'black',
            boxShadow: 'black 5px 5px 0 0px',
            borderRadius: 10,
            width: 100,
            alignSelf: 'center',

          }}>
          ← Voltar
        </Button>
      </View>
    </View>
  );
}
