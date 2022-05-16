import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const Todo = () => {
  return (
    <View style={[tw`mx-auto border-2 border-gray-200 my-4`, { width: "94%" }]}>
      <View style={tw`bg-gray-200 w-full p-2`}>
        <Pressable
          onPress={(e) =>
            alert("to change todo status press the todo status display below")
          }
        >
          <Text>Lorem ipsum dolor sit amet consectetur</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={(e) =>
          alert("to change todo status press the todo status display below")
        }
      >
        <Text style={tw`p-2`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          alias vero quod eveniet minima. Qui in odio culpa excepturi temporibus
          dolor non? Quis placeat minus labore exercitationem eveniet voluptas
          aut.
        </Text>
      </Pressable>
      <View style={tw`flex flex-row justify-between p-2`}>
        <Text style={tw`bg-amber-500 p-2 w-34 text-gray-50`}>in-complete</Text>

        <View style={tw`flex flex-row`}>
          <Text style={tw``}>
            <Entypo name="edit" size={25} style={tw`text-blue-500`} />
          </Text>
          <Text style={tw`mx-4`}>
            <AntDesign name="delete" size={25} style={tw`text-red-500`} />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Todo;
