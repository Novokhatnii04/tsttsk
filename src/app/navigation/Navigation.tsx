import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/welcome/WelcomeScreen";
import SignUpScreen from "../../screens/signUp/SignUp";
import SignInScreen from "../../screens/signIn/SignIn";
import VerificationScreen from '../../screens/VerificationScreen/VerificationScreen'

const Stack = createStackNavigator();

const Navigation = () => {
  const optionsForHeader = {
    headerLeft: () => null,
    headerTitle: "",
    headerTransparent: true,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={optionsForHeader}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={optionsForHeader}
        />
         <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={optionsForHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
