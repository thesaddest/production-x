import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: "features/auth-by-username/LoginForm",
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
