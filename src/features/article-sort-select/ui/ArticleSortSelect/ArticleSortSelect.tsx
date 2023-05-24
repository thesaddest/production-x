import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ArticlesSortFiled } from "entities/article";
import { SortOrder } from "shared/types/sortOrder";
import cls from "./ArticleSortSelect.module.scss";

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticlesSortFiled;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticlesSortFiled) => void;
}

export const ArticleSortSelect = memo<ArticleSortSelectProps>((props) => {
    const { className, sort, onChangeSort, onChangeOrder, order } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("ASCENDING"),
            },
            {
                value: "desc",
                content: t("DESCENDING"),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortFiled>[]>(
        () => [
            {
                value: ArticlesSortFiled.CREATED,
                content: t("CREATED"),
            },
            {
                value: ArticlesSortFiled.TITLE,
                content: t("TITLE"),
            },
            {
                value: ArticlesSortFiled.VIEWS,
                content: t("VIEWS"),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select label={t("SORT")} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
            <Select label={t("BY")} options={orderOptions} value={order} onChange={onChangeOrder} />
        </div>
    );
});
