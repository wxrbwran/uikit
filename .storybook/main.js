module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.tsx"],
  addons: [
    // "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        inline: true
      }
    },
    // "@storybook/preset-typescript",
    "@storybook/addon-links",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]]
          }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: prop => {
              if (prop.parent) {
                // console.log(prop.parent);
                // console.log(prop.parent.fileName);
                const show = !prop.parent.fileName.includes("node_modules");
                // console.log(show);
                return show;
              } else {
                return true;
              }
            }
          }
        }
      ]
    });
    console.log("?");
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
