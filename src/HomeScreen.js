import React from "react";
import { Text, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import ContinentItem from "../src/ContinentItem";
import { CONTINENT_QUERY } from "./gql/Query";

export default function HomeScreen() {
  const { data, loading } = useQuery(CONTINENT_QUERY); //execute query

  if (loading) {
    return <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center'}}>Fetching data...</Text>;
  }

  return (
    <FlatList
      data={data.continents}
      renderItem={({ item }) => <ContinentItem continent={item} />}
      keyExtractor={(item, index) => index}
    />
  );
}
