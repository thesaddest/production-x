import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/article";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface ArticleTabTypesProps {
    className?: string;
    value: string;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTabTypes = memo<ArticleTabTypesProps>((props) => {
    const { className, value, onChangeType } = props;

    const dispatch = useAppDispatch();

    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("ALL"),
            },
            {
                value: ArticleType.IT,
                content: t("IT"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("SCIENCE"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("ECONOMICS"),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return <Tabs className={classNames("", {}, [className])} tabs={typeTabs} value={value} onTabClick={onTabClick} />;
});
