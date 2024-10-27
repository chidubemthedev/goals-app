import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [goals, setGoals] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const goalInputHandler = (goal: string) => {
    setText(goal);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, text]);
    console.log(goals);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Enter a Goal"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text>{itemData.item}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item + index}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 30,
  },
  textInput: {
    flex: 1,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  goalsContainer: {
    flex: 8,
    marginTop: 20,
  },
  goalItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#cccccc",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
  },
});
