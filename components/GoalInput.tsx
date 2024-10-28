import { Button, StyleSheet, TextInput, View } from "react-native";

type Props = {
  goalInputHandler: (goal: string) => void;
  addGoalHandler: () => void;
  goal: string;
};

const GoalInput = ({ goalInputHandler, addGoalHandler, goal }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        value={goal}
        style={styles.textInput}
        placeholder="Enter a Goal"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
