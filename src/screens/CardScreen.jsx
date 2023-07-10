import { FlatList, ScrollView, View } from "react-native";
import { List, Text, TouchableRipple } from "react-native-paper";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

export default function CardScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  //   useEffect(() => {
  //     getTasks();
  //   }, []);

  useEffect(() => {
    const q = query(collection(db, "tarefa"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        const task = {
          id: doc.id,
          ...doc.data(),
        };
        tasks.push(task);
      });
      setTasks(tasks);
    });
    console.log(tasks);
    // pare de escutar quando sair
    return () => unsubscribe();
  }, []);

  async function getTasks() {
    try {
      const tasksRef = collection(db, "tarefa");
      const querySnapshot = await getDocs(tasksRef);
      querySnapshot.forEach((doc) => {
        const task = {
          id: doc.id,
          ...doc.data(),
        };
        setTasks((oldTasks) => [...oldTasks, task]);
      });
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteTask(id) {
    // faço um filtro de array para remover o item que tem o id igual ao id passado
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    // removo o item do banco de dados
    const taskRef = doc(db, "tarefa", id);
    // deleteDoc retorna uma promise
    deleteDoc(taskRef);
  }

  const ListItemTask = ({ item }) => {
    return (
      <List.Item
        style={{
          backgroundColor: "#fff",
          marginVertical: 5,
          width: 300,
          borderRadius: 10,
        }}
        title={item.titulo}
        description={item.descricao}
        dataPessoa={item.dataPessoa}
        onPress={() => {}}
        right={(props) => (
          <>
            <TouchableRipple
              onPress={() => {
                navigation.navigate("EditTaskScreen", {
                  docId: item.id,
                });
              }}
              
            >
              <List.Icon icon="file-edit" size={60} color="blue" />
            </TouchableRipple>
            <TouchableRipple
              onPress={() => {
                // remove item
                console.log("Remover");
                deleteTask(item.id);
              }}
            >
              <List.Icon icon="trash-can" size={60} color="red"/>
            </TouchableRipple>
          </>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
        <Text variant="headlineLarge">Lista de Tarefas</Text>
      </View>
      <View
        style={{
          ...styles.selfFullWidth,
          flex: 0.9,
        }}
      >
        <ScrollView
          style={{
            ...styles.selfFullWidth,
          }}
        >
          <FlatList
            data={tasks}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <ListItemTask key={item.id} item={item} onPress={() => {}} />
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}
