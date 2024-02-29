import React, {useRef,useState} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  const x = useRef(new Animated.Value(0)).current;
  const indexColor = useRef(new Animated.Value(0)).current;
  const [inputY,setInputY] = useState(y);
  const [inputX,setInputX] = useState(x);

  const open = () =>{
    Animated.timing(fadeAnim, {
      toValue:1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };
  const onTop = () => {
    Animated.timing(y,{
      toValue:inputY,
      duration:2000,
      useNativeDriver:true,
    }).start();
  }
  const onLeft = () => {
    Animated.timing(x,{
      toValue:inputX,
      duration:2000,
      useNativeDriver:true,
    }).start();
  }

const background = indexColor.interpolate({
  inputRange: [0,1,2,3],
  outputRange: ['yellow', 'green', 'red','blue']
})
const changBg = () => {
  Animated.timing(indexColor,{
    toValue:3,
    duration:4000,
    useNativeDriver:true,
  }).start();
}




  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            top:y,
            left:x,
            width:200,
            height:250,
            backgroundColor: background,
          },
        ]}>
        <Image style={{width:'100%',height:'100%'}} source={{uri:'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'}}/>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In Image" onPress={open} />
        <TextInput onChangeText={setInputY} placeholder=' enter input Y'/>
        <Button title="tranY" onPress={onTop} />
        <TextInput onChangeText={setInputX} placeholder=' enter input X'/>
        <Button title="tranX" onPress={onLeft} />
        <Button title="ChangeBG" onPress={changBg} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    height:'55%',
    padding: 20,
    backgroundColor:'red',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    height:'45%',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default App;