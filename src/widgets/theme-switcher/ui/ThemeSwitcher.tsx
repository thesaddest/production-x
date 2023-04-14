import { FC } from "react";

import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
    propsTheme?: Theme;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, propsTheme }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames("", {}, [className])} onClick={toggleTheme}>
            {propsTheme === undefined ? (
                theme === Theme.DARK ? (
                    <DarkIcon />
                ) : (
                    <LightIcon />
                )
            ) : propsTheme === Theme.DARK ? (
                <DarkIcon />
            ) : (
                <LightIcon />
            )}
        </Button>
    );
};
