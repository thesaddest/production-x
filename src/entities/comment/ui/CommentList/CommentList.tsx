import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import { memo } from "react";
import { Comment } from "../../model/types/comment";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo<CommentListProps>((props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard className={cls.comment} key={comment.id} comment={comment} isLoading={isLoading} />
                ))
            ) : (
                <Text text={t("NO COMMENTS")} />
            )}
        </div>
    );
});
