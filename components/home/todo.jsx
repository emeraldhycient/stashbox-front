import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";
import RNRestart from "react-native-restart";

const Todo = ({ todo }) => {
  const [open, setOpen] = useState(false);
  const [status, setstatus] = useState(todo?.status);
  const [items, setItems] = useState([
    { label: "in-complete", value: "in-complete" },
    { label: "complete", value: "complete" },
  ]);

  const [title, settitle] = useState(todo?.title);
  const [description, setdescription] = useState(todo?.description);

  const [iseditopen, setiseditopen] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(`https://stashbox-test.herokuapp.com/api/todos/${id}`)
      .then((res) => {
        //console.log(res.data);
        alert(res.data.message);
        RNRestart.Restart();
      })
      .catch((err) => {
        // console.error(err.response);
        alert(err.response.data.message);
      });
  };

  const handleUpdate = () => {
    if (!title || !description || !status) {
      alert("pls fill all fields");
      return;
    }

    //alert(`${title},${description},${status}`);
    axios
      .post(
        `https://stashbox-test.herokuapp.com/api/todos/update/${todo._id}`,
        {
          title: title,
          description: description,
          status: status,
        }
      )
      .then((res) => {
        //console.log(res.data);
        alert(res.data.message);
        RNRestart.Restart();
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
      });
  };

  return (
    <View style={[tw`mx-auto border-2 border-gray-200 my-4`, { width: "94%" }]}>
      <View style={tw`bg-gray-200 w-full p-2`}>
        <Text>{title}</Text>
      </View>
      <Text style={tw`p-2`}>{description}</Text>
      <View style={tw`flex flex-row justify-between p-2`}>
        {status === "in-complete" ? (
          <Text style={tw`bg-amber-500 p-2 w-34 text-gray-50`}>{status}</Text>
        ) : (
          <Text style={tw`bg-green-500 p-2 w-34 text-gray-50`}>{status}</Text>
        )}
        <View style={tw`flex flex-row`}>
          <Pressable onPress={() => setiseditopen((prev) => !prev)}>
            <Text style={tw``}>
              <Entypo name="edit" size={25} style={tw`text-blue-500`} />
            </Text>
          </Pressable>
          <Pressable onPress={() => handleDelete(todo._id)}>
            <Text style={tw`mx-4`}>
              <AntDesign name="delete" size={25} style={tw`text-red-500`} />
            </Text>
          </Pressable>
        </View>
      </View>

      {iseditopen ? (
        <View>
          <TextInput
            style={[
              tw`bg-gray-50 h-12 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
              { width: "94%" },
            ]}
            placeholder="Enter todo title"
            value={title}
            onChangeText={(text) => settitle(text)}
          />
          <TextInput
            style={[
              tw`bg-gray-50 h-16 mb-5 border border-blue-400 mx-auto rounded-md px-2`,
              { width: "94%" },
            ]}
            placeholder="Enter todo Description"
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
            <Pressable onPress={() => handleUpdate()}>
              <View
                style={[
                  tw`bg-blue-400 rounded p-2 w-36 flex items-center flex-col `,
                  { marginLeft: "3%" },
                ]}
              >
                <Text style={tw`text-white font-bold text-lg`}>
                  Update <Entypo name="plus" size={20} color="white" />
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Todo;
