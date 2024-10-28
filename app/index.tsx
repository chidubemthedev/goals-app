import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem goal={itemData.item} />}
          keyExtractor={(item, index) => item + index}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  goalsContainer: {
    flex: 8,
    marginTop: 20,
  },
});
