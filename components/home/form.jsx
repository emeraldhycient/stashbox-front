import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";

const Form = () => {
  return (
    <View style={tw`bg-slate-900 h-60 w-full pt-6 rounded-b-lg`}>
      <TextInput
        style={[
          tw`bg-gray-50 h-10 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
          { width: "94%" },
        ]}
        placeholder="Enter todo title"
      />
      <TextInput
        style={[
          tw`bg-gray-50 h-20 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
          { width: "94%" },
        ]}
        placeholder="Enter todo Description"
      />
      <Pressable>
        <View
          style={[
            tw`bg-blue-400 rounded p-1 w-36 flex items-center flex-col `,
            { marginLeft: "3%" },
          ]}
        >
          <Text style={tw`text-white font-bold text-lg`}>
            Add <Entypo name="plus" size={20} color="white" />
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Form;
