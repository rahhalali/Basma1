import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  ToastAndroid,
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  TouchableHighlight,
} from "react-native";
import {useDispatch,useSelector} from "react-redux";
import {schema} from "../schema/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useNavigate} from 'react-router';
import {LoginAsync} from "../Redux/LoginSlice";
const Login = ({ navigation }) => {
    const dispatch=useDispatch();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const submitForm = () => {
    const body = new FormData();
    dispatch(LoginAsync({email:email,password:password}))
  };
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          style={{
            height: 200,
            width: 200,
            borderRadius: 200,
            transform: [{ rotate: spin }],
          }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(e) => setEmail(e)}

          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(e) => setPassword(e)}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={submitForm}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
  },
    alert: {
      backgroundColor: '#EEEEEE',
    },
    icon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C3272B',
      width: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -16,
      marginBottom: 16,
    },
    contentText: {
      textAlign: 'center',
    },
    btn: {
      borderRadius: 32,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 8,
      alignSelf: 'stretch',
      backgroundColor: '#4CB748',
      marginTop: 16,
      minWidth: '50%',
    },
    btnText: {
      color: '#FFFFFF',
    },

  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },

  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
});

export default Login;
