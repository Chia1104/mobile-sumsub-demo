const { withUniwindConfig } = require("uniwind/metro");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

const config = getSentryExpoConfig(__dirname);

config.resolver.sourceExts.push("sql");

config.cacheStores = [
  new FileStore({
    root: path.join(__dirname, "node_modules", ".cache", "metro"),
  }),
];

config.resolver.unstable_enablePackageExports = true;

/** @type {import('expo/metro-config').MetroConfig} */
module.exports = withUniwindConfig(config, {
  cssEntryFile: "./src/global.css",
  dtsFile: "./src/uniwind-types.d.ts",
});
