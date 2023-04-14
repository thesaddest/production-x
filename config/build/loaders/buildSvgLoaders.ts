export function buildSvgLoaders() {
    return {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
}
