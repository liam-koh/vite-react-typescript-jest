module.exports = {
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ],
    env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime'
      ]
    }
  }
};