import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type Props = {
  goalInputHandler: (goal: string) => void;
  addGoalHandler: () => void;
  goal: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  goal,
  showModal,
  setShowModal,
}: Props) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/200" }}
        />
        <TextInput
          onChangeText={goalInputHandler}
          value={goal}
          style={styles.textInput}
          placeholder="Enter a Goal"
        />
        <View style={styles.buttonControls}>
          <Button
            onPress={() => setShowModal(false)}
            title="Cancel"
            color={"red"}
          />
          <Button onPress={addGoalHandler} title="Add Goal" color={"#a065ec"} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a065b0",
  },
  textInput: {
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  buttonControls: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
