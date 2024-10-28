import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  goal: string;
  goals: string[];
  onDeleteGoal: (index: number) => void;
};

const GoalItem = ({ goal, goals, onDeleteGoal }: Props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDeleteGoal(goals.indexOf(goal))}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    backgroundColor: "#cccccc",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
  },
});
