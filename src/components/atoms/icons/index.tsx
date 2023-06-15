import { View, Text } from "react-native";
import React from "react";

import HomeIcon from "./HomeIcon";
import SearchIcon from "./SearchIcon";
import HearthIcon from "./HeartIcon";

export type Icon = {
  color?: string;
};

const IconList = {
  home: HomeIcon,
  search: SearchIcon,
  hearth: HearthIcon,
};

type IconsProps = {
  name: keyof typeof IconList;
  color?: string;
  size?: number;
};

export type SvgProps = Omit<IconsProps, "name">;

const Icons = ({ name, size = 24, color = "black" }: IconsProps) => {
  const Icon = IconList[name];

  if (!Icon) {
    console.warn(`Icon ${name} not found`);

    return (
      <View>
        <Text>Icon not found</Text>
      </View>
    );
  }

  return <Icon size={size} color={color} />;
};

export default Icons;
