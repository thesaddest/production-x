import {
    ChangeEvent,
    ChangeEventHandler,
    EventHandler,
    FC,
    InputHTMLAttributes,
    memo,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const { className, value, onChange, type = "text", placeholder, autoFocus, ...otherProps } = props;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setCaretPosition(target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} />}
            </div>
        </div>
    );
});
