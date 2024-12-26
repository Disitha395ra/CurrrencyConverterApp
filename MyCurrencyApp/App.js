import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { PaperProvider,Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <PaperProvider>
            <Text>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</Text>
            <Image
              source={require("./assets/banner.png")}
              style={styles.banner}
            />
          </PaperProvider>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: "100%", 
    height: 200, 
    position:"center",
  },
});
