import { Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React, { ComponentProps } from "react";
import Icons from "./icons";

type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  PressableProps?: ComponentProps<typeof Pressable>;
  IconProps?: ComponentProps<typeof Icons>;
};

const Button = (props: ButtonProps) => {
  const { children, style, PressableProps, IconProps } = props;
  return (
    <Pressable
      style={style}
      className="active:opacity-50 rounded-lg border border-gray-200 bg-white pt-2 pb-2 pl-4 pr-4"
      {...PressableProps}
    >
      {IconProps && <Icons {...IconProps} />}
      {children && <Text>{children}</Text>}
    </Pressable>
  );
};

export default Button;
