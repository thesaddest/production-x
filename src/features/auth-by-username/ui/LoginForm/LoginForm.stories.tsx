import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { STATE_STATUSES } from "shared/constants/state.constants";

const meta: Meta<typeof LoginForm> = {
    title: "features/auth-by-username/LoginForm",
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

Primary.decorators = [StoreDecorator({ loginForm: { username: "test", password: "123" } })];

export const withError: Story = {
    args: {},
};

withError.decorators = [StoreDecorator({ loginForm: { username: "test", password: "123", error: "SOME_ERROR" } })];

export const Loading: Story = {
    args: {},
};

Loading.decorators = [
    StoreDecorator({ loginForm: { username: "test", password: "123", status: STATE_STATUSES.PENDING } }),
];
