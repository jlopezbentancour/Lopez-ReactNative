import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Modal from "./components/Modal";

export default function App() {
  const [textItem, setTextITem] = useState("");

  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => {
    setTextITem(t);
  };

  const addItem = () => {
    setList((currentList) => [
      ...currentList,

      { id: Math.random().toString(), value: textItem },
    ]);

    setTextITem("");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text style={styles.flatlistero}>{item.value}</Text>
    </TouchableOpacity>
  );

  const deleteItem = () => {
    console.log(itemSelected);
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const selectedItem = (id) => {
    console.log(id);

    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "red", fontStyle: "italic" }}>
        Shopping List 🛍️
      </Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="new item"
          placeholderTextColor="black"
          style={styles.inputStyle}
          value={textItem}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 100,
  },
  inputcontainer: {
    backgroundColor: "white",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  inputStyle: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    width: 300,
    color: "black",
  },
  button: {
    backgroundColor: "red",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  flatlistero: {
    paddingTop: 30,
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});
