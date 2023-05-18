import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";
import { memo, useCallback, useEffect } from "react";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleById } from "entities/article/model/services/fetchArticleById";
import { useSelector } from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsStatus,
} from "../../model/selectors/articleDetails";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo<ArticleDetailsProps>(({ className, id }) => {
    const dispatch = useAppDispatch();
    const status = useSelector(getArticleDetailsStatus);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const { t } = useTranslation("article-details");

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} className={cls.block} key={block.id} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent block={block} className={cls.block} key={block.id} />;
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block} className={cls.block} key={block.id} />;
            default:
                return null;
        }
    }, []);

    let content;

    if (status === STATE_STATUSES.LOADING) {
        content = (
            <>
                <Skeleton height={200} width={200} border={"50%"} className={cls.avatar} />
                <Skeleton height={32} width={300} className={cls.title} />
                <Skeleton height={200} width={"100%"} className={cls.skeleton} />
                <Skeleton height={200} width={"100%"} className={cls.skeleton} />
            </>
        );
    } else if (error) {
        content = <Text align={TextAlign.CENTER} title={t("ERROR LOADING ARTICLE")} />;
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    useInitialEffect(() => dispatch(fetchArticleById(id)));

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    );
});
