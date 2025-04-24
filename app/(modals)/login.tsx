import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Page = () => {
  useWarmUpBrowser();
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={Colors.grey}
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />

      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View style={{flex: 1, borderBottomColor: "#000", borderBottomWidth: StyleSheet.hairlineWidth}} />
        <Text style={styles.separator}>or</Text>
        <View style={{flex: 1, borderBottomColor: "#000", borderBottomWidth: StyleSheet.hairlineWidth}} />
      </View>

        <View style={{gap: 20}}>
            <TouchableOpacity style={styles.btnOutline}>
                <Ionicons name="call-outline" size={24} style={defaultStyles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline}>
                <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline}>
                <Ionicons name="logo-google" size={24} style={defaultStyles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOutline}>
                <Ionicons name="logo-facebook" size={24} style={defaultStyles.btnIcon} />
                <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  separator: {
    fontFamily: "mon-sb",
    color: Colors.grey,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  btnOutlineText: {
    color: "#000",
    fontFamily: "mon-sb",
    fontSize: 16,
  },

});

export default Page;
