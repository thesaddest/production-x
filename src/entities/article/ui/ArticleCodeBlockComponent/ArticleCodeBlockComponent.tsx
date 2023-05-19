import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Code } from "shared/ui/Code/Code";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { ArticleCodeBlock } from "../../model/types/article";

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
