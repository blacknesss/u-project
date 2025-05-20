import { BuildOptions } from "./types/config";
import { Configuration } from "webpack";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}