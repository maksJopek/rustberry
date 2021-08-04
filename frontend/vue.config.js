const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "wasm"),
        outDir: path.resolve(__dirname, "wasm", "pkg"),
      }),
    ],
    resolve: {
      alias: tsAliases(),
    },
    experiments: {
      asyncWebAssembly: true,
    },
  },
};

function tsAliases(tsconfigPath = "./tsconfig.json") {
  const tsconfig = require(tsconfigPath);
  const { paths, baseUrl } = tsconfig.compilerOptions;
  return Object.fromEntries(
    Object.entries(paths)
      .filter(([, pathValues]) => pathValues.length > 0)
      .map(([pathKey, pathValues]) => {
        const key = pathKey.replace("/*", "");
        const value = path.resolve(
          path.dirname(tsconfigPath),
          baseUrl,
          pathValues[0].replace("/*", "")
        );
        return [key, value];
      })
  );
}
