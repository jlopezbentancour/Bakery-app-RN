import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Bread</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default CategoryBreadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "RubikMonoOne",
    color: "white",
  },
});
