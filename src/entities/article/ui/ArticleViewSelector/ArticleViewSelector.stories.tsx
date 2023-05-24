import type { Meta, StoryObj } from "@storybook/react";

import { ArticleViewSelector } from "./ArticleViewSelector";

const meta: Meta<typeof ArticleViewSelector> = {
    title: "entities/article/ArticleViewSelector",
    component: ArticleViewSelector,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
