import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import AddCommentForm from "./AddCommentForm";

const meta: Meta<typeof AddCommentForm> = {
    title: "features/add-new-comment/AddCommentForm",
    component: AddCommentForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSendComment: action("onSendComment"),
    },
};

Primary.decorators = [StoreDecorator({})];
