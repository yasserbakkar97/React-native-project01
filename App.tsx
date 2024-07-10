import React from "react";
import {
  Button,
  View, 
  Text,
  SafeAreaView
} from "react-native";

function App(){
  return(
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button
        title="Press Me"
        color = "#841584"
        accessibilityLabel="Learn more about this purple button" 
        />
      </View>
    </SafeAreaView>
  )
};

export default App;