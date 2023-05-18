import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
    title: "CommentCard",
    component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
