import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/welcome/WelcomeScreen";
import SignUpScreen from "../../screens/signUp/SignUpContent";
import SignInScreen from "../../screens/signIn/SignIn";

const Stack = createStackNavigator();

const Navigation = () => {
  const optionsForAuthHeader = {
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
          options={optionsForAuthHeader}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={optionsForAuthHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
