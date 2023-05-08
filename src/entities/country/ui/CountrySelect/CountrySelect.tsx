import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.Belarus,
        content: Country.Belarus,
    },
    {
        value: Country.Germany,
        content: Country.Germany,
    },
    {
        value: Country.Poland,
        content: Country.Poland,
    },
    {
        value: Country.Russia,
        content: Country.Russia,
    },
    {
        value: Country.Ukraine,
        content: Country.Ukraine,
    },
];

export const CountrySelect = memo<CountrySelectProps>((props) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames("", {}, [className])}
            label={t("YOUR COUNTRY")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
