import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: "Text",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        square: true,
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeL: Story = {
    args: {
        square: true,
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        square: true,
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: ">",
        theme: ButtonTheme.OUTLINE,
    },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
