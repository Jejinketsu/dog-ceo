import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { forwardRef } from "react";

type InputTextProps = {
  style?: StyleProp<ViewStyle>;
  error?: string;
} & TextInputProps;

const InputText = forwardRef((props: InputTextProps, ref) => {
  const { style, error, ...rest } = props;
  return (
    <View style={style}>
      <TextInput
        ref={ref}
        className={`rounded-lg border bg-white ${
          error ? "border-red-500" : "border-gray-200"
        } px-4 py-2 text-lg`}
        {...rest}
      />
    </View>
  );
});

export default InputText;
