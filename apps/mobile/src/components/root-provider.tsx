import { StatusBar } from "react-native";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
import { usePreventScreenCapture } from "expo-screen-capture";
import * as SystemUI from "expo-system-ui";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Uniwind, useCSSVariable } from "uniwind";

import {
  AndroidBlurTargetView,
  BlurTargetProvider,
} from "@/components/ui/animated-blur-view";
import { useOnlineManager } from "@/hooks/use-online-manager";
import { persistOptions, queryClient } from "@/libs/request/query-client";

const INITIAL_LIGHT_BACKGROUND_COLOR = "#F7F7F7";

Uniwind.setTheme("light");
SystemUI.setBackgroundColorAsync(INITIAL_LIGHT_BACKGROUND_COLOR);

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  usePreventScreenCapture();
  useOnlineManager();
  const systemBackgroundColor =
    (useCSSVariable("--background") as string | undefined) ??
    INITIAL_LIGHT_BACKGROUND_COLOR;

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}>
      <ThemeProvider value={DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <BlurTargetProvider>
              <HeroUINativeProvider>
                <StatusBar backgroundColor={systemBackgroundColor} />
                <AndroidBlurTargetView style={{ flex: 1 }}>
                  {children}
                </AndroidBlurTargetView>
              </HeroUINativeProvider>
            </BlurTargetProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </PersistQueryClientProvider>
  );
};
