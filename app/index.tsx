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
    setText("");
    console.log(goals);
  };
  const onDeleteGoal = (index: number) => {
    setGoals((currentGoals) => {
      return currentGoals.filter(
        (item) => currentGoals.indexOf(item) !== index
      );
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        goal={text}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              goal={itemData.item}
              goals={goals}
              onDeleteGoal={onDeleteGoal}
            />
          )}
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
