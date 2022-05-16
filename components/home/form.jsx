import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [status, setstatus] = useState(null);
  const [items, setItems] = useState([
    { label: "in-complete", value: "in-complete" },
    { label: "complete", value: "complete" },
  ]);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  return (
    <View style={tw`bg-slate-900 h-72 w-full pt-6 rounded-b-lg`}>
      <TextInput
        style={[
          tw`bg-gray-50 h-12 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
          { width: "94%" },
        ]}
        placeholder="Enter todo title"
        value={title}
        onChange={(text) => settitle(text)}
      />
      <TextInput
        style={[
          tw`bg-gray-50 h-16 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
          { width: "94%" },
        ]}
        placeholder="Enter todo Description"
        value={description}
        onChange={(text) => setdescription(text)}
      />
      <View style={tw`flex flex-row justify-between mx-4`}>
        <View style={[tw`z-10`, { width: "50%" }]}>
          <DropDownPicker
            open={open}
            value={status}
            items={items}
            setOpen={setOpen}
            setValue={setstatus}
            setItems={setItems}
          />
        </View>
        <Pressable
          onPress={() =>
            alert(`title :${title},desc : ${description},status : ${status}`)
          }
        >
          <View
            style={[
              tw`bg-blue-400 rounded p-2 w-36 flex items-center flex-col `,
              { marginLeft: "3%" },
            ]}
          >
            <Text style={tw`text-white font-bold text-lg`}>
              Add <Entypo name="plus" size={20} color="white" />
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Form;
