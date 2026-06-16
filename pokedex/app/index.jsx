import { StyleSheet, Text, View } from "react-native";
import Header from "@/components/Header";

export default function index() {
  return (
    <view style={styles.container}>
      <Header title="Pokédex"></Header>
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