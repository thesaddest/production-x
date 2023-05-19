import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
    title: "entities/comment/CommentCard",
    component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comment: {
            id: "1",
            text: "hello, world!",
            user: { id: "1", username: "Test" },
        },
    },
};
