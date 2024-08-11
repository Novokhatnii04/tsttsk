import React, { ReactNode, useEffect, useRef } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";

interface FadeInViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        props.style,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
