import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Loader> = {
    title: "shared/Loader",
    component: Loader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
