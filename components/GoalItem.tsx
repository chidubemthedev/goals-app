import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  goal: string;
  goals: string[];
  onDeleteGoal: (index: number) => void;
};

const GoalItem = ({ goal, goals, onDeleteGoal }: Props) => {
  return (
    <Pressable onPress={() => onDeleteGoal(goals.indexOf(goal))}>
      <View style={styles.goalItem}>
        <Text>{goal}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#cccccc",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
  },
});
