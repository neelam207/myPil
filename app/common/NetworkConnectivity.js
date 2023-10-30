import React, { Component } from "react";
import { View, Text, Button, Alert, Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default class InternetConnectivityChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CheckConnectivity = async () => {
    // For Android devices
    if (Platform.OS === "android") {
      try {
        const { isConnected } = await NetInfo.fetch();
        if (isConnected) {
          Alert.alert("You are online!");
        } else {
          Alert.alert("You are offline!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = (isConnected) => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );
    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      Alert.alert("You are online!");
    }
  };

  render() {
    const { CheckConnectivity } = this;
    return (
      <View>
        <Button
          onPress={() => CheckConnectivity()}
          title="Check Internet Connectivity"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
