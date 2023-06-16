import React from "react";

import { Tabs } from "expo-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Icons from "../components/atoms/icons";
import { FavoritesProvider } from "../contexts/FavoritesContext";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <Tabs
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
          })}
        >
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
              unmountOnBlur: true,
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Icons name="hearth" size={32} color={color} />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tabs.Screen
            name="breed/[breed]"
            options={{
              headerShown: false,
              tabBarStyle: { display: "none" },
              tabBarItemStyle: { display: "none" },
              tabBarShowLabel: false,
            }}
          />
        </Tabs>
      </FavoritesProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
