import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "shared/ui/Modal/Modal";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "SOME_CONTENT",
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: "SOME_CONTENT",
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
