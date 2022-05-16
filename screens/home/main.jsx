import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

import Form from "../../components/home/form";
import Todo from "../../components/home/todo";

const Main = () => {
  return (
    <>
      <Form />
      <ScrollView style={tw`bg-white -mt-2 w-full rounded-t-lg p-4`}>
        <Text style={tw`text-lg font-bold text-slate-900 my-2`}>Todo's</Text>
        <View style={tw`bg-blue-400 w-10 h-1 mb-4`}></View>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ScrollView>
    </>
  );
};

export default Main;
