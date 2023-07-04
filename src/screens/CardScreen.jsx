import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";
import { FlatList } from "react-native-web";

export default function CardScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  function getTasksFromDatabase() {
    const tasksCollectionRef = collection(db, "tarefa");
    getTasks(tasksCollectionRef, (querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });
      setTarefas(tasks);
    });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("/assets/icone.png")}
        style={{ width: 300, height: 200 }}
      />
      <View style={styles.box}>
        <FlatList
          data={[
            { key: "Tarefa 1" },
          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </View>
  );
}
