import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink",
    component: AppLink,
    args: {
        to: "/",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
};
export const PrimaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
