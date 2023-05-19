import { classNames, Mods } from "shared/lib/classNames/classNames";
import { CSSProperties, FC, useMemo } from "react";
import cls from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size]);
    return <img src={src} alt={alt} className={classNames(cls.Avatar, mods, [className])} style={styles} />;
};
