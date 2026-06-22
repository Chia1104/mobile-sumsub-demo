import "@/global.css";
import "@/libs/translations";
import type { ErrorBoundaryProps } from "expo-router";
import { Stack } from "expo-router";

import { ExpoError } from "@/components/expo-error";
import { RootProvider } from "@/components/root-provider";
import { useStackScreenOptions } from "@/hooks/use-stack-screen-options";
import { globalInit } from "@/modules/app/utils";

globalInit();

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <ExpoError {...props} />;
}

const RootLayout = () => {
  const screenOptions = useStackScreenOptions();

  return (
    <RootProvider>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </RootProvider>
  );
};

export default RootLayout;
