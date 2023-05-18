import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { memo } from "react";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo<CommentCardProps>((props) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton height={32} width={32} border={"50%"} />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton width={"100%"} height={50} className={cls.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user.avatar && <Avatar size={32} src={comment?.user.avatar} />}
                <Text className={cls.username} title={comment?.user.username} />
            </div>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
