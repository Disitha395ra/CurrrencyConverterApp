import { StyleSheet, View, ScrollView, Image } from "react-native";
import {
  PaperProvider,
  Text,
  Divider,
  TextInput,
  RadioButton,
  Button,
} from "react-native-paper";
import React from "react";

export default function Calculator() {
    const [text, setText] = React.useState("");
    const [checked1, setChecked1] = React.useState("LKR");
    const [checked2, setChecked2] = React.useState("LKRConverted");
    const [textcon, setTextcon] = React.useState("");

    const conversionRates = {
        LKR : {LKR:1, USD:0.003, GBP:0.002},
        USD : {LKR:333, USD:1, GBP:0.8},
        GBP : {LKR:500, USD:1.25, GBP:1},
    }

    const handleconversion = () => {
        const sourceCurrency = checked1;
        const targetCurrency = checked2;
        const value = parseFloat(text);

        if(isNaN(value)){
            alert("Please Enter a Valid Number");
            return;
        }

        const rate = conversionRates[sourceCurrency][targetCurrency];
        const convertedValue = value * rate;
        setTextcon(convertedValue.toString());
    }

    return (
      <View style={styles.container}>
        <PaperProvider>
          <Text variant="titleLarge">Currency Calculator 💱</Text>
          <View style={styles.radiobutton}>
            <RadioButton
              value="LKR"
              status={checked1 === "LKR" ? "checked" : "unchecked"}
              onPress={() => setChecked1("LKR")}
            />
            <Text>LKR</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="USD"
              status={checked1 === "USD" ? "checked" : "unchecked"}
              onPress={() => setChecked1("USD")}
            />
            <Text>USD</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="GBP"
              status={checked1 === "GBP" ? "checked" : "unchecked"}
              onPress={() => setChecked1("GBP")}
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
              value="LKRConverted"
              status={checked2 === "LKRConverted" ? "checked" : "unchecked"}
              onPress={() => setChecked2("LKRConverted")}
            />
            <Text>LKR</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="USDConverted"
              status={checked2 === "USDConverted" ? "checked" : "unchecked"}
              onPress={() => setChecked2("USDConverted")}
            />
            <Text>USD</Text>
          </View>
          <View style={styles.radiobutton}>
            <RadioButton
              value="GBPConverted"
              status={checked2 === "GBPConverted" ? "checked" : "unchecked"}
              onPress={() => setChecked2("GBPConverted")}
            />
            <Text>GBP</Text>
          </View>

          <Button icon="backup-restore" mode="contained">
            Convert
          </Button>
          <Divider style={styles.divider} onPress={handleconversion} />

          <Text variant="titleLarge">Result</Text>
          <TextInput
            label="Converted Value"
            value={textcon}
            onChangeText={(textcon) => setTextcon(textcon)}
            mode="outlined"
            style={styles.textinput}
            editable={false}
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
  radiobutton: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider:{
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  }
});