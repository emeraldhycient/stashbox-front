import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";

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

  const handleEdit = () => {
    setiseditopen(true);
  };

  return (
    <View style={[tw`mx-auto border-2 border-gray-200 my-4`, { width: "94%" }]}>
      <View style={tw`bg-gray-200 w-full p-2`}>
        <Pressable
          onPress={(e) =>
            alert("to change todo status press the todo status display below")
          }
        >
          <Text>{todo?.title}</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={(e) =>
          alert("to change todo status press the todo status display below")
        }
      >
        <Text style={tw`p-2`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus
          provident, nam omnis praesentium quam distinctio illum placeat
          suscipit cupiditate repudiandae ex, corporis in repellendus tempora
          rerum amet, tempore adipisci!
        </Text>
      </Pressable>
      <View style={tw`flex flex-row justify-between p-2`}>
        <Text style={tw`bg-amber-500 p-2 w-34 text-gray-50`}>{status}</Text>

        <View style={tw`flex flex-row`}>
          <Pressable onPress={() => setiseditopen((prev) => !prev)}>
            <Text style={tw``}>
              <Entypo name="edit" size={25} style={tw`text-blue-500`} />
            </Text>
          </Pressable>
          <Text style={tw`mx-4`}>
            <AntDesign name="delete" size={25} style={tw`text-red-500`} />
          </Text>
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
                alert(
                  `title :${title},desc : ${description},status : ${status}`
                )
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
      ) : null}
    </View>
  );
};

export default Todo;
