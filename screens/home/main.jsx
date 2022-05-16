import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import tw from "twrnc";
import axios from "axios";
import Form from "../../components/home/form";
import Todo from "../../components/home/todo";

const Main = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://stashbox-test.herokuapp.com/api/todos/")
      .then((res) => {
        settodos(res.data.todos);
        //console.log(res.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, []);

  return (
    <>
      <Form />
      <ScrollView style={tw`bg-white -mt-2 w-full rounded-t-lg p-4`}>
        <Text style={tw`text-lg font-bold text-slate-900 my-2`}>Todo's</Text>
        <View style={tw`bg-blue-400 w-10 h-1 mb-4`}></View>
        {todos.length > 0 ? (
          todos.map((items) => <Todo key={items._id} todo={items} />)
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    </>
  );
};

export default Main;
