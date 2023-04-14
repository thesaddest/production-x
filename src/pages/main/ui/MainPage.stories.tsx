import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof MainPage> = {
    title: "pages/MainPage",
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
