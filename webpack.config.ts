import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { Configuration } from "webpack";

const webpackConfig = (env: any): Configuration => ({
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            components: path.resolve(__dirname, "./src/components/")
        }
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    devServer: {
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),

        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}"
            }
        })
    ]
});

export default webpackConfig;
