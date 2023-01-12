import React from "react";
import { Text, FlatList,View } from "react-native";
import { useQuery } from "@apollo/client";
import ContinentItem from "../src/ContinentItem";
import { Book_QUERY} from "./gql/Query";

export default function HomeScreen() {
  const { data, loading } = useQuery(Book_QUERY); //execute query

  if (loading) {
    return <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center'}}>Fetching data...</Text>;
  }

  return (
    <View>
    <FlatList
      data={data.books}
      renderItem={({ item }) => <ContinentItem continent={item} />}
      keyExtractor={(item, index) => index} />
    </View>
  );
}
