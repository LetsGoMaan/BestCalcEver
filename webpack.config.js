const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scripts/script.js', // Путь к главному файлу вашего приложения
    output: {
        filename: 'bundle.js', // Имя выходного файла JavaScript
        path: path.resolve(__dirname, 'dist'), // Путь к папке выходного файла
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Путь к шаблону HTML
            filename: 'index.html', // Имя выходного файла HTML
        }),
    ],
};
