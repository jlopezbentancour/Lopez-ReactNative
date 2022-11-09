import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal as NewModal,
} from "react-native";
import React from "react";

const Modal = (props) => {
  const { isVisible, actionDeleteItem } = props;

  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={{ backgroundColor: "white" }}>
          <Text style={{ fontSize: 20 }}>Queres Eliminar este elemento? </Text>
          <Pressable
            onPress={() => actionDeleteItem()}
            style={{ backgroundColor: "black" }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              eliminar
            </Text>
          </Pressable>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
