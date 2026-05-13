import React from "react";

import { View, Text } from "react-native";

import { Input } from "../../atoms";

import { styles } from "./InputFieldStyle";

interface InputFieldProps {

  label: string;

  placeholder: string;

  secureTextEntry?: boolean;
}

const InputField = ({
  label,
  placeholder,
  secureTextEntry,
}: InputFieldProps) => {

  return (

    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />

    </View>
  );
};

export default InputField;