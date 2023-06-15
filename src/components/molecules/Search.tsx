import { View, StyleProp, ViewStyle } from "react-native";
import React, { ComponentProps } from "react";
import InputText from "../atoms/InputText";
import Button from "../atoms/Button";

type SearchProps = {
  InputTextProps?: ComponentProps<typeof InputText>;
  ButtonProps?: ComponentProps<typeof Button>;
  style?: StyleProp<ViewStyle>;
};

const Search = ({ InputTextProps, ButtonProps, style }: SearchProps) => {
  const searchRef = React.useRef(null);

  return (
    <View style={style} className="flex-row justify-between">
      <InputText ref={searchRef} style={{ width: "83%" }} {...InputTextProps} />
      <Button
        style={{ width: "15%" }}
        className="items-center justify-center"
        IconProps={{ name: "search" }}
        {...ButtonProps}
        PressableProps={{
          onPress: () => {
            if (!InputTextProps?.value) searchRef.current?.focus();
            else {
              ButtonProps?.PressableProps?.onPress();
              searchRef.current?.blur();
            }
          },
        }}
      />
    </View>
  );
};

export default Search;
