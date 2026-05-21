import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";

import { styles } from "./RegisterFormStyles"; 

// Importamos molecules
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

       {/* Campo nombre completo */}
      <InputField
        label="FULL NAME"
        placeholder="Enter your full name"
      />

       {/* Campo username */}
      <InputField
        label="USERNAME"
        placeholder="Enter your username"
      />

      {/* Campo email */}
      <InputField
        label="EMAIL"
        placeholder="Enter your email"
      />

      {/* Date of Birth */}
      <InputField
        label="DATE OF BIRTH"
        placeholder="YYYY-MM-DD"
      />

       {/* Campo password */}
      <InputField
        label="PASSSWORD"
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Campo confirm password */}
      <InputField
        label="CONFIRM PASSWORD"
        placeholder="Confirm your password"
        secureTextEntry
      />

      {/* Botón CREATE ACCOUNT */}
      <Button
        title="CREATE ACCOUNT"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default RegisterForm;