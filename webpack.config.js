const path = require("path")

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        stylus: {
            test: /\.styl$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "stylus-loader",
                    options: {
                        import: [ // Тут для Stylus'а можем объявить глобальные переменные или функции, чтобы каждый раз их не импортировать
                            path.resolve(__dirname, 'src/Common/Styles/variables.styl'),
                        ],
                    }
                },
            ],
        },
    }

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}