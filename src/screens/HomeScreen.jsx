import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('/assets/icone.png')} style={{width: 300, height: 200,}}/>
            <View style={styles.box}>
                <Text style={styles.titulo}>MENU</Text>
                <Button style={styles.botao} textColor={'black'} mode="contained" onPress={() => navigation.navigate('AddTaskScreen')}>
                    Cadastrar
                </Button>
                <Button style={styles.botao} textColor={'black'} mode="contained" onPress={() => navigation.navigate('CardScreen')}>
                    Tarefas 
                </Button>
            </View>
        </View>
    );
}