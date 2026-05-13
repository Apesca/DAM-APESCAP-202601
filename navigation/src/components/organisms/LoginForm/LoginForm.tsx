import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Button } from "../../atoms";

import { styles } from "./LoginFormStyles"; 

import {
  InputField,
} from "../../moleculas";

interface LoginProps {

  onSubmit?: () => void;
}

const LoginForm = ({
  onSubmit,
}: LoginProps) => {

  return (
    <View>

      
      <InputField
        label="Username"
        placeholder="Enter your email"
      />

      

      <InputField
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>


      <Button
        title="LOGIN"
      />

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default LoginForm;