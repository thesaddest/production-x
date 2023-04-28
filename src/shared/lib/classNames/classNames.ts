export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    className: string | undefined,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(" ");
}
