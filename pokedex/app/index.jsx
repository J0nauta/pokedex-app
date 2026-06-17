import { FlatList, StyleSheet, Text, View } from "react-native";
import { pokemons } from "@/data/pokemons"
import Header from "@/components/Header";
import Card from "../components/Header/Card"

export default function index() {


  const renderPokemon = ({ item }) => (
    <Card pokemon={item}/>
  )


  return (
    <view style={styles.container}>
      <Header title="Pokédex" />
      <FlatList
      data={pokemons}
      style={styles.cards}
      keyExtractor={(pokemon) => pokemon.Numero.toString()}
      renderItem={ renderPokemon }
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      />  
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  cards: {
    padding: 15,
  },
});