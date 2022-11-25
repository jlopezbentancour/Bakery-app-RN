import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const BreadDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Details</Text>
      <Button
        title="Go to Categories"
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "RubikMonoOne",
    color: "white",
  },
});
