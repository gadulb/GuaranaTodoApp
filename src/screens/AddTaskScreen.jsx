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
      navigation.navigate("HomeScreen");
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{textAlign: 'center', marginBottom: 20,}}>Cadastro</Text>
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
        <Text style={styles.infoT}>Data de Cadastro</Text>
        <TextInput
          placeholder="Data de Cadastro"
          value={dataPessoa}
          mode="outlined"
          onChangeText={setDataPessoa}
        />

        <Button
          labelStyle={{ fontWeight: "bold", color: "white" }}
          onPress={cadastrarTask}
          style={{
          backgroundColor: 'green',
            borderBottomColor: 'black',
            boxShadow: 'black 5px 5px 0 0px',
            borderRadius: 10,
            marginVertical: 40,
          }}
        >
          Cadastrar
        </Button>

      </View>
    </View>
  );
}
