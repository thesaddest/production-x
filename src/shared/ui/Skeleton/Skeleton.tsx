import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";
import { CSSProperties, memo } from "react";

interface SkeletonProps {
    className?: string;
    height: string | number;
    width: string | number;
    border?: string;
}

export const Skeleton = memo<SkeletonProps>((props) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return <div className={classNames(cls.Skeleton, {}, [className])} style={styles}></div>;
});
