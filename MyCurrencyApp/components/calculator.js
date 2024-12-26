import { StyleSheet, View, ScrollView, Image } from "react-native";
import { PaperProvider, Text, Divider } from "react-native-paper";

export default function Calculator() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <Text variant="titleMedium">Calculator</Text>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});