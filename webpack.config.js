const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/script.js', // Путь к главному файлу вашего приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла JavaScript
    path: path.resolve(__dirname, 'dist'), // Путь к папке выходного файла
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к шаблону HTML
      filename: 'index.html', // Имя выходного файла HTML
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/, // применять правила только к CSS-файлам
        use: ['style-loader', 'css-loader'], // загрузчики для обработки CSS
      },
    ],
  },
};
