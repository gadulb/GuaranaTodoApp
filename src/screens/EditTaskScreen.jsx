import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
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

  function atualizarTitulo(value) {
    setTitulo(value);
  }

  function atualizarDescricao(value) {
    setDescricao(value);
  }

  function atualizarDataPessoa(value) {
    setDataPessoa(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Alterar</Text>
        <TextInput
          label="Título"
          value={titulo}
          onChangeText={atualizarTitulo}
        />
        <TextInput
          label="Descrição"
          value={descricao}
          onChangeText={atualizarDescricao}
        />
        <TextInput
          label="Data de Cadastro"
          value={dataPessoa}
          onChangeText={atualizarDataPessoa}
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