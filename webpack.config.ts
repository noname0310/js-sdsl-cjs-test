import path from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        assetModuleFilename: "asset/[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: "asset"
            }
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        extensions: [".ts", ".js"]
    },
    mode: "production"
};
