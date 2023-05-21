import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleView } from "entities/article";
import TileIcon from "shared/assets/icons/tile.svg";
import ListIcon from "shared/assets/icons/list.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo<ArticleViewSelectorProps>((props) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)} key={viewType.view}>
                    <Icon
                        Svg={viewType.icon}
                        className={classNames("", { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
