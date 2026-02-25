const { defineConfig } = require('@rsbuild/core');
const reactPlugin = require('@rsbuild/plugin-react');

module.exports = defineConfig({
  plugins: [reactPlugin()],
  entry: './src/main.jsx', // Entry point of your app
  output: './dist', // Output directory
  mode: 'development', // Use 'production' for production builds
});
