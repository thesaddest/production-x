import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
    const cssLoaders =
    {
        test: /\.s[ac]ss$/i,
        use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]-[hash:base64:8]"
                            : "[hash:base64:8]"
                    },
                }
            },
        "sass-loader"
        ],
    }

    const typescriptLoaders = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }

    return [
        typescriptLoaders,
        cssLoaders
    ]
}