import { BuildPaths } from "../build/types/config";
import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { buildSvgLoaders } from "../build/loaders/buildSvgLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module.rules.push(buildSvgLoaders());
    config.module.rules.push(buildCssLoaders(true));
    return config;
};
