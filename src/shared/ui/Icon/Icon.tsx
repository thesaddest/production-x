import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import { memo, SVGProps, VFC } from "react";

interface IconProps {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo<IconProps>(({ className, Svg }) => {
    return <Svg className={classNames(cls.Icon, {}, [className])}></Svg>;
});
