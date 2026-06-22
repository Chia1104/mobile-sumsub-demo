import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
import isYesterdayPlugin from "dayjs/plugin/isYesterday";
import utc from "dayjs/plugin/utc";
import { install } from "react-native-quick-crypto";

export const globalInit = () => {
  dayjs.extend(utc);
  dayjs.extend(isTodayPlugin);
  dayjs.extend(isYesterdayPlugin);

  install();
};
