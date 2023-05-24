import type { Meta, StoryObj } from "@storybook/react";

import { ArticleTabTypes } from "./ArticleTabTypes";

const meta: Meta<typeof ArticleTabTypes> = {
    title: "ArticleTabTypes",
    component: ArticleTabTypes,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
