import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

// Importamos atoms
import { Button } from "../../atoms";

import { styles } from "./LoginFormStyles"; 

// Importamos molecules
import {
  InputField,
} from "../../moleculas";

// Props del formulario
interface LoginProps {

  // Función del botón login
  onSubmit?: () => void;
}

// Organism LoginForm
const LoginForm = ({
  onSubmit,
}: LoginProps) => {

  return (
    <View>

      
      {/* Campo email */}
      <InputField
        label="Username"
        placeholder="Enter your email"
      />

      

      {/* Campo contraseña */}
      <InputField
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      
      {/* Forgot password SIN FUNCION TODAVIAAAAAAAAAAAAAAAAAAAA*/}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>


      {/* Boton login SIN FUNCION TODAVIAAAAAAAAAAAAAAAAAAAA*/}
      <Button
        title="LOGIN"
      />

      {/* Footer: Sign up */}
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