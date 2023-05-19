import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "widgets/Navbar",
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {};
AuthNavbar.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];
