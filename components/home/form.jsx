import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [status, setstatus] = useState(null);
  const [items, setItems] = useState([
    { label: "in-complete", value: "in-complete" },
    { label: "complete", value: "complete" },
  ]);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const addTodo = () => {
    if (!title || !description || !status) {
      alert("pls fill all fields");
      return;
    }

    //alert(`${title},${description},${status}`);
    axios
      .post("https://stashbox-test.herokuapp.com/api/todos/create", {
        title: title,
        description: description,
        status: status,
      })
      .then((res) => {
        //console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
      });
  };

  return (
    <View style={tw`bg-slate-900 h-72 w-full pt-6 rounded-b-lg`}>
      <TextInput
        style={[
          tw`bg-gray-50 h-12 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
          { width: "94%" },
        ]}
        value={title}
        placeholder="Enter todo-title"
        onChangeText={(text) => settitle(text)}
      />
      <TextInput
        style={[
          tw`bg-gray-50 h-16 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
          { width: "94%" },
        ]}
        placeholder="Enter todo-Description"
        value={description}
        onChangeText={(text) => setdescription(text)}
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
        <Pressable onPress={() => addTodo()}>
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
