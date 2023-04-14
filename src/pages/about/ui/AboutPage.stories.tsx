import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AboutPage> = {
    title: "pages/AboutPage",
    component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
