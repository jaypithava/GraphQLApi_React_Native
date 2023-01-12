import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import { View ,Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/HomeScreen';
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  return (
    <SafeAreaView>
    <ApolloProvider client={client}>
    <View style={{justifyContent:'center', marginTop:30}}>
      <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center'}}>Country Name</Text>
      <HomeScreen />
    </View>
    </ApolloProvider>
    </SafeAreaView>
  );
}
