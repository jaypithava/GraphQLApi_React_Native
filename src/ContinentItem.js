import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const ContinentItem = ({ continent }) => {
  const { name, code } = continent; //get the name of continent
  const { title, author } = continent; //get the name of continent

  return (
    <Pressable style={styles.mainView}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={{ ...styles.textStyle, color: "red" }}>{author}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: "100%",
    backgroundColor: "yellow",
  },
});

export default ContinentItem;
