import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "shared/ui/Code/Code";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo<ArticleImageBlockComponentProps>(({ className, block }) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
