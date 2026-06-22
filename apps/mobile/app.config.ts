import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "SumSub Demo",
    slug: "sumsub-demo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "sumsub-demo",
    backgroundColor: "#F7F7F7",
    userInterfaceStyle: "light",
    ios: {
      icon: "./assets/expo.icon",
      buildNumber: "1",
    },
    android: {
      backgroundColor: "#F7F7F7",
      versionCode: 1,
      version: "1.0.0-nightly.0",
      userInterfaceStyle: "light",
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      package: "com.chia1104.sumsubdemo",
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#208AEF",
          android: {
            image: "./assets/images/splash-icon.png",
            imageWidth: 76,
          },
        },
      ],
      "expo-secure-store",
      "expo-localization",
      "expo-system-ui",
      "react-native-quick-crypto",
      "react-native-notify-kit",
      "@react-native-vector-icons/fontawesome",
      "@react-native-vector-icons/ionicons",
      "@react-native-vector-icons/material-design-icons",
      "expo-font",
      "expo-image",
      "expo-status-bar",
      "expo-web-browser",
      "expo-localization",
      "./plugins/with-ios-scene-delegate",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  };
};
