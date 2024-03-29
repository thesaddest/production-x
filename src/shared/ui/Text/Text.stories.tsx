import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Title Lorem Ipsum",
        text: "Description text",
    },
};

export const Error: Story = {
    args: {
        title: "Title Lorem Ipsum",
        text: "Description text",
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Title Lorem Ipsum",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Description text",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Title Lorem Ipsum",
        text: "Description text",
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: "Title Lorem Ipsum",
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: "Description text",
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
    args: {
        title: "Title Lorem Ipsum",
        text: "Description text",
        size: TextSize.L,
    },
};
