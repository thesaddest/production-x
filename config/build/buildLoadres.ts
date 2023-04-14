import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildSvgLoaders } from "./loaders/buildSvgLoaders";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = buildSvgLoaders();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const cssLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoader, fileLoader, svgLoader];
}
