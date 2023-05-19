import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        propsTheme: Theme.LIGHT,
    },
};
export const Dark: Story = {
    args: {
        propsTheme: Theme.DARK,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
