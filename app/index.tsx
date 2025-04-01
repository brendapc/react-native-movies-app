import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-5xl text-blue-500">Welcome!</Text>
      <Link href="/onboarding">
        <Text className="text-2xl text-blue-500">Go to Onboarding</Text>
      </Link>
      <Link href="/movie/1">Movie 1</Link>
    </View>
  );
}
