import { View } from "react-native";

import { Button } from "heroui-native";
import { EmptyState } from "heroui-native-pro/empty-state";
import { useTranslation } from "react-i18next";

import { withExpoError } from "@/hocs/with-expo-error";

export const ExpoError = withExpoError(({ retry }) => {
  const { t } = useTranslation(["global"]);
  return (
    <View className="flex-1 items-center justify-center">
      <EmptyState>
        <EmptyState.Header>
          <EmptyState.Title>{t("error.default.title")}</EmptyState.Title>
          <EmptyState.Description>
            {t("error.default.description")}
          </EmptyState.Description>
        </EmptyState.Header>
        <EmptyState.Content>
          <Button onPress={retry} size="sm">
            <Button.Label>{t("actions.retry")}</Button.Label>
          </Button>
        </EmptyState.Content>
      </EmptyState>
    </View>
  );
});
