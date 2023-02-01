import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function BuildDevServer(options: BuildOptions): DevServerConfigurations{
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}