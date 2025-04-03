import { Client, Databases, Query } from "react-native-appwrite";

//exclamation marks tell typescript we are positive that this variable exists when he is not sure
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

//check if a record of that search has already been stored
//if a document is found increment the searchCount field
//if no document is found create a new one with searchCount = 1
export const updateSearchCount = async (query: string, movie?: Movie) => {

  const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.equal('searchTerm', query)
  ]);

  console.log(result)
};
