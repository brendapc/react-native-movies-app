import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { images } from "@/constants/images";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { updateSearchCount } from "@/services/appwrite";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();

        if (movies.length > 0 && movies[0]) {
          await updateSearchCount(searchQuery, movies[0]);
        }
      } else {
        reset();
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className="mt-10 px-5">
              <Text className="text-gray-500 text-center">
                {searchQuery.trim()
                  ? "No movies found"
                  : "Search for movies..."}
              </Text>
            </View>
          ) : null
        }
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                onPress={() => {}}
                onChangeText={(text: string) => setSearchQuery(text)}
                value={searchQuery}
                placeholder="Search movies..."
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {moviesError && (
              <Text className="text-red-500 px-5 my-3">
                Error: {moviesError.message}
              </Text>
            )}

            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search results for {""}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default Search;
