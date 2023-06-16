import { View, Text, Image } from "react-native";
import React from "react";

type PhotoPreviewerProps = {
  uri: string;
};

const PhotoPreviewer = ({ uri }: PhotoPreviewerProps) => {
  return (
    <View className="mt-2">
      <Image className="h-56 w-44 rounded-lg" source={{ uri }} />
    </View>
  );
};

export default PhotoPreviewer;
