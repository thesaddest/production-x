import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getAddCommentFormText } from "../../model/selectors/addComentFormSelectors";
import { addNewCommentActions, addNewCommentReducer } from "../../model/slice/addNewCommentSlice";
import cls from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddCommentForm = memo<AddCommentFormProps>(({ className, onSendComment }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentChangeText = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentChangeText("");
    }, [onCommentChangeText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t("ENTER COMMENT")}
                    value={text}
                    onChange={onCommentChangeText}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    {t("SEND")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
