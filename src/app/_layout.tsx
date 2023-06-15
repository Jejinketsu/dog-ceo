import React from "react";

import { Tabs } from "expo-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Icons from "../components/atoms/icons";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icons name="home" size={34} color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icons name="hearth" size={32} color={color} />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
};

export default RootLayout;
