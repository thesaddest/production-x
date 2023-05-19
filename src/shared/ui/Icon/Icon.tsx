import { classNames } from "shared/lib/classNames/classNames";
import { memo, SVGProps, VFC } from "react";
import cls from "./Icon.module.scss";

interface IconProps {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo<IconProps>(({ className, Svg }) => {
    return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
