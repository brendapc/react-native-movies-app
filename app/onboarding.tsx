import { View, Text } from "react-native";
import React from "react";

const Onboarding = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl text-blue-500">Onboarding</Text>
    </View>
  );
};

export default Onboarding;
