import { Button, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/categories";
import { FlatList } from "react-native";
import GridItem from "../components/GridItem";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Bread", {
      categoryID: item.id,
      name: item.titulo,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtracto={(item) => item.id}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;
