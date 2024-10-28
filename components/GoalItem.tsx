import { StyleSheet, Text, View } from "react-native";

type Props = {
  goal: string;
};

const GoalItem = ({ goal }: Props) => {
  return (
    <View style={styles.goalItem}>
      <Text>{goal}</Text>
    </View>
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
