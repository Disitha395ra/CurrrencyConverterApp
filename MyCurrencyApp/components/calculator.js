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
          <Text variant="titleLarge">Currency Calculator 💱</Text>
          <View style={styles.radiobutton}>
            <RadioButton
              value="LKR"
              status={checked === "LKR" ? "checked" : "unchecked"}
              onPress={() => setChecked("LKR")}
            />
            <Text>LKR</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="USD"
              status={checked === "USD" ? "checked" : "unchecked"}
              onPress={() => setChecked("USD")}
            />
            <Text>USD</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="GBP"
              status={checked === "GBP" ? "checked" : "unchecked"}
              onPress={() => setChecked("GBP")}
            />
            <Text>GBP</Text>
          </View>

          <TextInput
            label="Enter Currency value You Want to Convert"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            style={styles.textinput}
          />
          <Divider />

          <Text variant="titleMedium">Converted Currency</Text>
          <View style={styles.radiobutton}>
            <RadioButton
              value="LKR"
              status={checked === "LKR" ? "checked" : "unchecked"}
              onPress={() => setChecked("LKR")}
            />
            <Text>LKR</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="USD"
              status={checked === "USD" ? "checked" : "unchecked"}
              onPress={() => setChecked("USD")}
            />
            <Text>USD</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="GBP"
              status={checked === "GBP" ? "checked" : "unchecked"}
              onPress={() => setChecked("GBP")}
            />
            <Text>GBP</Text>
          </View>

          <TextInput
            label="Enter Currency value You Want to Convert"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            style={styles.textinput}
          />
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
  textinput: {
    width: "100%",
    marginVertical: 20,
    borderRadius: 10,
  },
  radiobutton:{
    flexDirection: "row",
    alignItems: "center",
  }
});