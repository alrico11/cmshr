import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button } from 'react-native';


// View, text, image, scrollView, textinput

export default function App() {
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ borderWidth: 1, flex:1, alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./assets/favicon.png")}
            resizeMode='contain'
          />
          <View style={{ borderWidth: 1 }}>
            <Image
              source={{ uri: "https://kawainimeaibang.vercel.app/apple-touch-icon.png" }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        </View>
      </View>
      <Text>Open up App.js to start working on your app!</Text>

      <Image
        style={{ width: 100, height: 100 }}
        source={require("./assets/favicon.png")}
        resizeMode='contain'
      />
      <View style={{ borderWidth: 1 }}>
        <Image
          source={{ uri: "https://kawainimeaibang.vercel.app/apple-touch-icon.png" }}
          style={{ width: 100, height: 100 }}
        />

      </View>
      <TextInput
        style={{ borderWidth: 1, fontSize: 24 }}
        placeholder='Email'
        onChangeText={(value) =>
          // console.log("Value: ", value)
          setText(value)
        }
      />
      <Text style={{ color: "red", fontSize: 36 }}>{text}</Text>
      <Text style={{ fontSize: 36 }}>{count}</Text>
      <AppClass cobaText={text}
      />
      <AppFunction cobaText={text}
        buttonAction={(val) =>
          setCount(count + val)
        }
      />
    </View>

  );
}

class AppClass extends Component {
  render() {
    return (
      <View>
        <Text>INI DARI CLASS</Text>
        <Text>{this.props.cobaText}</Text>
      </View>
    );
  }
}
// const AppFunction = (props, buttonAction) => {
//   return (
//     <View>
//       <Text>NI DARI APPFUNCTION</Text>
//       <Text>{props.cobaText}</Text>
//       <Button title="Submit Button"
//         onPress={() =>
//           buttonAction()
//         }
//       />
//     </View>
//   )
// }

const AppFunction = ({ cobaText, buttonAction }) => {
  return (
    <View>
      <Text>NI DARI APPFUNCTION</Text>
      <Text>{cobaText}</Text>
      <Button title="Submit Button" onPress={() => buttonAction(5)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
