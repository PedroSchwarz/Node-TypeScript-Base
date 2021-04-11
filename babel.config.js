module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./src/controllers",
          "@models": "./src/models",
          "@views": "./src/views",
          "@routes": "./src/routes",
          "@repositories": "./src/repositories",
          "@database": "./src/database",
          "@config": "./src/config",
        },
      },
    ],
  ],
};
