import React from "react";
import { TextInput } from "react-native";

import { styles } from "./InputStyle";

interface InputProps {

  placeholder: string;

  secureTextEntry?: boolean;
}


const Input = ({
  placeholder,
  secureTextEntry,
}: InputProps) => {
  return (

    <TextInput
      style={styles.input}
      placeholder={placeholder}


      placeholderTextColor="#ef7f00"

      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;