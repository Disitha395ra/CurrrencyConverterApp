import { StyleSheet, View, ScrollView, Image } from "react-native";
import {
  PaperProvider,
  Text,
  Divider,
  TextInput,
  RadioButton,
} from "react-native-paper";
import React from "react";

export default function Calculator() {
    const [text, setText] = React.useState("");
    const [checked, setChecked] = React.useState("LKR");

    return (
      <View style={styles.container}>
        <PaperProvider>
          <Text variant="titleLarge">Calculator</Text>
          <RadioButton
            value="LKR"
            status={checked === "LKR" ? "checked" : "unchecked"}
            onPress={() => setChecked("LKR")} 
          />
          <RadioButton
            value="USD"
            status={checked === "USD" ? "checked" : "unchecked"}
            onPress={() => setChecked("USD")}
          />
          <RadioButton
            value="GBP"
            status={checked === "GBP" ? "checked" : "unchecked"}
            onPress={() => setChecked("GBP")}
          />
          <TextInput
            label="Enter Currency value You Want to Convert"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            style={styles.textinput}
          />
          <Divider/>
        </PaperProvider>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textinput:{
    width:"100%",
    marginVertical: 20,
    borderRadius: 10 ,
  }
});