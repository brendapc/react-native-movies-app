import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie ID: {id}</Text>
    </View>
  );
};

export default Details;
