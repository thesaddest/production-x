import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Currency.PLN,
        content: Currency.PLN,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
];

export const CurrencySelect = memo<CurrencySelectProps>((props) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames("", {}, [className])}
            label={t("YOUR CURRENCY")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
