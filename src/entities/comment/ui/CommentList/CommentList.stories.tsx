import type { Meta, StoryObj } from "@storybook/react";

import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
    title: "entities/comment/CommentList",
    component: CommentList,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: "1",
                text: "hello",
                user: { id: "1", username: "test" },
            },
            {
                id: "2",
                text: "test",
                user: { id: "1", username: "storybook" },
            },
        ],
    },
};

Primary.decorators = [];

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
