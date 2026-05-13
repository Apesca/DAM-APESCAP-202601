import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";

import { styles } from "./RegisterFormStyles"; 

import {
  InputField,
} from "../../moleculas";

interface RegisterFormProps {
  onSubmit: () => void;
}

const RegisterForm = (
  { onSubmit }: RegisterFormProps
) => {
  return (
    <View>

      <InputField
        label="FULL NAME"
        placeholder="Enter your full name"
      />

      <InputField
        label="USERNAME"
        placeholder="Enter your username"
      />

      <InputField
        label="EMAIL"
        placeholder="Enter your email"
      />

      <InputField
        label="DATE OF BIRTH"
        placeholder="YYYY-MM-DD"
      />

      <InputField
        label="PASSSWORD"
        placeholder="Enter your password"
        secureTextEntry
      />

      <InputField
        label="CONFIRM PASSWORD"
        placeholder="Confirm your password"
        secureTextEntry
      />

      <Button
        title="CREATE ACCOUNT"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default RegisterForm;